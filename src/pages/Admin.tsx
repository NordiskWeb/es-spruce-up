import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { LogOut, Save, Home, Menu, FileText, GripVertical, Trash2 } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  href: string;
  sort_order: number;
  is_visible: boolean;
}

interface SiteContent {
  id: string;
  section_key: string;
  section_name: string;
  content: Record<string, unknown>;
}

type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

const Admin = () => {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const navigate = useNavigate();
  
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [siteContent, setSiteContent] = useState<SiteContent[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('content');

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth');
    }
  }, [user, isLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    // Fetch menu items
    const { data: menuData, error: menuError } = await supabase
      .from('menu_items')
      .select('*')
      .order('sort_order');
    
    if (menuError) {
      console.error('Error fetching menu items:', menuError);
    } else {
      setMenuItems(menuData || []);
    }

    // Fetch site content
    const { data: contentData, error: contentError } = await supabase
      .from('site_content')
      .select('*');
    
    if (contentError) {
      console.error('Error fetching site content:', contentError);
    } else if (contentData) {
      const mappedContent: SiteContent[] = contentData.map(item => ({
        id: item.id,
        section_key: item.section_key,
        section_name: item.section_name,
        content: typeof item.content === 'object' && item.content !== null && !Array.isArray(item.content) 
          ? item.content as Record<string, unknown>
          : {},
      }));
      setSiteContent(mappedContent);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const updateMenuItem = (id: string, field: keyof MenuItem, value: string | boolean | number) => {
    setMenuItems(items =>
      items.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const updateSiteContent = (sectionKey: string, field: string, value: string) => {
    setSiteContent(contents =>
      contents.map(content =>
        content.section_key === sectionKey
          ? { ...content, content: { ...content.content, [field]: value } }
          : content
      )
    );
  };

  const saveMenuItems = async () => {
    if (!isAdmin) {
      toast.error('Du har inte behörighet att redigera menyn');
      return;
    }

    setIsSaving(true);
    try {
      for (const item of menuItems) {
        const { error } = await supabase
          .from('menu_items')
          .update({
            label: item.label,
            href: item.href,
            sort_order: item.sort_order,
            is_visible: item.is_visible,
          })
          .eq('id', item.id);
        
        if (error) throw error;
      }
      toast.success('Menyn har sparats!');
    } catch (error) {
      console.error('Error saving menu items:', error);
      toast.error('Kunde inte spara menyn');
    } finally {
      setIsSaving(false);
    }
  };

  const saveSiteContent = async () => {
    if (!isAdmin) {
      toast.error('Du har inte behörighet att redigera innehållet');
      return;
    }

    setIsSaving(true);
    try {
      for (const content of siteContent) {
        const { error } = await supabase
          .from('site_content')
          .update({ content: content.content as unknown as Json })
          .eq('section_key', content.section_key);
        
        if (error) throw error;
      }
      toast.success('Innehållet har sparats!');
    } catch (error) {
      console.error('Error saving site content:', error);
      toast.error('Kunde inte spara innehållet');
    } finally {
      setIsSaving(false);
    }
  };

  const addMenuItem = async () => {
    if (!isAdmin) {
      toast.error('Du har inte behörighet att lägga till menyalternativ');
      return;
    }

    const newOrder = menuItems.length > 0 ? Math.max(...menuItems.map(m => m.sort_order)) + 1 : 0;
    
    const { data, error } = await supabase
      .from('menu_items')
      .insert({
        label: 'Ny länk',
        href: '#',
        sort_order: newOrder,
        is_visible: true,
      })
      .select()
      .single();
    
    if (error) {
      console.error('Error adding menu item:', error);
      toast.error('Kunde inte lägga till menyalternativ');
    } else if (data) {
      setMenuItems([...menuItems, data]);
      toast.success('Menyalternativ tillagt!');
    }
  };

  const deleteMenuItem = async (id: string) => {
    if (!isAdmin) {
      toast.error('Du har inte behörighet att ta bort menyalternativ');
      return;
    }

    const { error } = await supabase
      .from('menu_items')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Error deleting menu item:', error);
      toast.error('Kunde inte ta bort menyalternativet');
    } else {
      setMenuItems(items => items.filter(item => item.id !== id));
      toast.success('Menyalternativ borttaget!');
    }
  };

  const getContentByKey = (key: string) => {
    return siteContent.find(c => c.section_key === key);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Ingen behörighet</CardTitle>
            <CardDescription>
              Du har inte administratörsbehörighet för att komma åt denna sida.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button onClick={() => navigate('/')} variant="outline">
              <Home className="mr-2 h-4 w-4" />
              Tillbaka till startsidan
            </Button>
            <Button onClick={handleSignOut} variant="ghost">
              <LogOut className="mr-2 h-4 w-4" />
              Logga ut
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const heroContent = getContentByKey('hero');
  const aboutContent = getContentByKey('about');
  const contactContent = getContentByKey('contact');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Admin Panel</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={() => navigate('/')}>
              <Home className="mr-2 h-4 w-4" />
              Visa sidan
            </Button>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Logga ut
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Innehåll
            </TabsTrigger>
            <TabsTrigger value="menu" className="flex items-center gap-2">
              <Menu className="h-4 w-4" />
              Meny
            </TabsTrigger>
          </TabsList>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Redigera innehåll</h2>
              <Button onClick={saveSiteContent} disabled={isSaving}>
                <Save className="mr-2 h-4 w-4" />
                {isSaving ? 'Sparar...' : 'Spara ändringar'}
              </Button>
            </div>

            {/* Hero Section */}
            {heroContent && (
              <Card>
                <CardHeader>
                  <CardTitle>Hero-sektion</CardTitle>
                  <CardDescription>Huvudrubrik och introduktionstext på startsidan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="hero-title">Rubrik</Label>
                    <Input
                      id="hero-title"
                      value={(heroContent.content.title as string) || ''}
                      onChange={(e) => updateSiteContent('hero', 'title', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-subtitle">Underrubrik</Label>
                    <Textarea
                      id="hero-subtitle"
                      value={(heroContent.content.subtitle as string) || ''}
                      onChange={(e) => updateSiteContent('hero', 'subtitle', e.target.value)}
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* About Section */}
            {aboutContent && (
              <Card>
                <CardHeader>
                  <CardTitle>Om oss</CardTitle>
                  <CardDescription>Information om företaget</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="about-title">Rubrik</Label>
                    <Input
                      id="about-title"
                      value={(aboutContent.content.title as string) || ''}
                      onChange={(e) => updateSiteContent('about', 'title', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="about-description">Beskrivning</Label>
                    <Textarea
                      id="about-description"
                      value={(aboutContent.content.description as string) || ''}
                      onChange={(e) => updateSiteContent('about', 'description', e.target.value)}
                      rows={4}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="about-experience">Erfarenhet</Label>
                      <Input
                        id="about-experience"
                        value={(aboutContent.content.experience as string) || ''}
                        onChange={(e) => updateSiteContent('about', 'experience', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="about-projects">Projekt</Label>
                      <Input
                        id="about-projects"
                        value={(aboutContent.content.projects as string) || ''}
                        onChange={(e) => updateSiteContent('about', 'projects', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="about-satisfaction">Nöjdhet</Label>
                      <Input
                        id="about-satisfaction"
                        value={(aboutContent.content.satisfaction as string) || ''}
                        onChange={(e) => updateSiteContent('about', 'satisfaction', e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Contact Section */}
            {contactContent && (
              <Card>
                <CardHeader>
                  <CardTitle>Kontakt</CardTitle>
                  <CardDescription>Kontaktinformation och rubriker</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-title">Rubrik</Label>
                    <Input
                      id="contact-title"
                      value={(contactContent.content.title as string) || ''}
                      onChange={(e) => updateSiteContent('contact', 'title', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-subtitle">Underrubrik</Label>
                    <Textarea
                      id="contact-subtitle"
                      value={(contactContent.content.subtitle as string) || ''}
                      onChange={(e) => updateSiteContent('contact', 'subtitle', e.target.value)}
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Menu Tab */}
          <TabsContent value="menu" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Redigera meny</h2>
              <div className="flex gap-2">
                <Button variant="outline" onClick={addMenuItem}>
                  Lägg till länk
                </Button>
                <Button onClick={saveMenuItems} disabled={isSaving}>
                  <Save className="mr-2 h-4 w-4" />
                  {isSaving ? 'Sparar...' : 'Spara ändringar'}
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Menyalternativ</CardTitle>
                <CardDescription>Dra för att ändra ordning, eller redigera text och länkar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {menuItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg"
                  >
                    <GripVertical className="h-5 w-5 text-muted-foreground cursor-move" />
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">Text</Label>
                        <Input
                          value={item.label}
                          onChange={(e) => updateMenuItem(item.id, 'label', e.target.value)}
                          placeholder="Menytext"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">Länk</Label>
                        <Input
                          value={item.href}
                          onChange={(e) => updateMenuItem(item.id, 'href', e.target.value)}
                          placeholder="#section"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">Ordning</Label>
                        <Input
                          type="number"
                          value={item.sort_order}
                          onChange={(e) => updateMenuItem(item.id, 'sort_order', parseInt(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={item.is_visible}
                          onCheckedChange={(checked) => updateMenuItem(item.id, 'is_visible', checked)}
                        />
                        <Label className="text-sm text-muted-foreground">Synlig</Label>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteMenuItem(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                {menuItems.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    Inga menyalternativ. Klicka på "Lägg till länk" för att skapa ett.
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
