 { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pizza, Clock, MapPin, Phone, Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";

const MENU_ITEMS = [
  { name: "مارجريتا كلاسيك", price: "45 SAR", description: "صلصة طماطم، موزاريلا طازجة، ريحان، وزيت زيتون.", category: "بيتزا" },
  { name: "بيبروني بزم", price: "55 SAR", description: "قطع بيبروني بقرية فاخرة مع جبنة موزاريلا مضاعفة.", category: "بيتزا" },
  { name: "بيتزا الخضار", price: "50 SAR", description: "فلفل ملون، زيتون، فطر، بصل، وذرة.", category: "بيتزا" },
  { name: "ترافل بارادايس", price: "75 SAR", description: "فطر بري، زيت ترافل، وجبنة بارميزان معتقة.", category: "بيتزا فاخرة" },
  { name: "أصابع الموزاريلا", price: "25 SAR", description: "6 قطع مقرمشة تقدم مع صلصة المارينارا.", category: "مقبلات" },
  { name: "سلطة يونانية", price: "30 SAR", description: "خيار، طماطم، جبنة فيتا، وزيتون كالاماتا.", category: "مقبلات" },
];

const Index = () => {
  const [booking, setBooking] = useState({ name: "", date: "", guests: "2" });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`تم استلام طلب الحجز بنجاح يا ${booking.name}! سنتصل بك قريباً.`);
    setBooking({ name: "", date: "", guests: "2" });
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900" dir="rtl">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pizza className="text-orange-600 h-8 w-8" />
            <span className="text-2xl font-bold tracking-tighter text-orange-600">بيتزا بارادايس</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#menu" className="hover:text-orange-600 transition">القائمة</a>
            <a href="#about" className="hover:text-orange-600 transition">عن المطعم</a>
            <a href="#booking" className="hover:text-orange-600 transition">احجز الآن</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2000" 
            alt="Pizza background" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            طعم إيطاليا الأصيل في قلب مدينتك
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-200 max-w-2xl mx-auto">
            نستخدم أجود المكونات الطبيعية والمطهوة في أفران الحطب التقليدية.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8" asChild>
              <a href="#menu">استعرض القائمة</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-lg px-8" asChild>
              <a href="#booking">احجز طاولة</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Pizza className="text-orange-600 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">عجينة طازجة</h3>
              <p className="text-stone-600">يتم تحضير العجينة يدوياً يومياً وتخميرها لمدة 48 ساعة.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="text-orange-600 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">توصيل سريع</h3>
              <p className="text-stone-600">نضمن وصول البيتزا إليك ساخنة ومقرمشة خلال 30 دقيقة.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="text-orange-600 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">مكونات محلية</h3>
              <p className="text-stone-600">ندعم المزارعين المحليين ونستخدم منتجاتهم الطازجة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-stone-50" id="menu">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">قائمة الطعام</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MENU_ITEMS.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow border-none shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <span className="text-orange-600 font-bold">{item.price}</span>
                  </div>
                  <CardDescription className="text-orange-500 font-medium">[{item.category}]</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-white" id="booking">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 bg-stone-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 md:p-12 text-white flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6">احجز طاولتك</h2>
              <p className="text-stone-400 mb-8">خطط لسهرتك معنا. نحن نوفر أجواء هادئة وخدمة متميزة تليق بك وبعائلتك.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="text-orange-500" />
                  <span>+966 50 000 0000</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-orange-500" />
                  <span>شارع التحلية، الرياض، المملكة العربية السعودية</span>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12 bg-white">
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name text-right block">الاسم بالكامل</Label>
                  <Input 
                    id="name" 
                    required 
                    placeholder="أحمد محمد" 
                    className="text-right"
                    value={booking.name}
                    onChange={(e) => setBooking({...booking, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date text-right block">التاريخ والوقت</Label>
                  <div className="relative">
                    <Input 
                      id="date" 
                      type="datetime-local" 
                      required 
                      className="text-right"
                      value={booking.date}
                      onChange={(e) => setBooking({...booking, date: e.target.value})}
                    />
                    <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-stone-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests text-right block">عدد الأشخاص</Label>
                  <Input 
                    id="guests" 
                    type="number" 
                    min="1" 
                    max="20" 
                    value={booking.guests}
                    className="text-right"
                    onChange={(e) => setBooking({...booking, guests: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 h-12 text-lg">
                  تأكيد الحجز
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Pizza className="text-orange-600 h-6 w-6" />
            <span className="text-xl font-bold text-orange-600">بيتزا بارادايس</span>
          </div>
          <p className="text-stone-500 mb-8">© 2024 جميع الحقوق محفوظة لمطعم بيتزا بارادايس.</p>
          <div className="flex justify-center gap-6">
            {/* Social Icons Placeholder */}
            <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center hover:bg-orange-100 transition cursor-pointer">IG</div>
            <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center hover:bg-orange-100 transition cursor-pointer">X</div>
            <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center hover:bg-orange-100 transition cursor-pointer">FB</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
