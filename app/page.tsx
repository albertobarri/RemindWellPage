import Link from "next/link"
import { ArrowRight, Bell, Calendar, Check, Clock, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Bell className="h-6 w-6 text-primary" />
            <span>RemindWell</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  0
                </span>
              </Button>
            </Link>
            <Link href="/product">
              <Button>Shop Now</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Never Miss Your Medication Again
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    RemindWell is a smart pillbox that helps you stay on track with your medication schedule through
                    timely reminders and easy organization.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/product">
                    <Button size="lg" className="gap-1.5">
                      Shop Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden bg-muted">
                  <img
                    alt="RemindWell Smart Pillbox"
                    className="object-cover"
                    src="/placeholder.svg?height=600&width=600"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Smart Features for Better Health</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  RemindWell combines innovative technology with user-friendly design to help you manage your
                  medications effortlessly.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Smart Reminders</h3>
                <p className="text-center text-muted-foreground">
                  Customizable alerts notify you when it's time to take your medication, ensuring you never miss a dose.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-3 rounded-full bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Weekly Organization</h3>
                <p className="text-center text-muted-foreground">
                  Seven daily compartments with four time slots each help you organize your medications for the entire
                  week.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-3 rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Medication Tracking</h3>
                <p className="text-center text-muted-foreground">
                  Track your medication history and adherence through our companion mobile app for better health
                  management.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How RemindWell Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Simple setup, powerful results. Get started with RemindWell in just a few easy steps.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Set Up Your Schedule</h3>
                <p className="text-center text-muted-foreground">
                  Input your medication schedule in the RemindWell app, specifying times and dosages.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Fill Your Pillbox</h3>
                <p className="text-center text-muted-foreground">
                  Organize your medications in the appropriate compartments for each day and time slot.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Receive Reminders</h3>
                <p className="text-center text-muted-foreground">
                  Get notifications on your phone and through the pillbox's built-in alarm when it's time to take your
                  medication.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Customers Say</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Hear from people who have transformed their medication routine with RemindWell.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-background">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-10 w-10 overflow-hidden">
                    <img alt="Sarah J." className="object-cover" src="/placeholder.svg?height=40&width=40" />
                  </div>
                  <div>
                    <h3 className="font-bold">Sarah J.</h3>
                    <p className="text-sm text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "RemindWell has been a game-changer for managing my parents' medications. The reminders give me peace
                  of mind knowing they won't miss important doses."
                </p>
                <div className="flex text-primary">
                  <Check className="h-5 w-5" />
                  <Check className="h-5 w-5" />
                  <Check className="h-5 w-5" />
                  <Check className="h-5 w-5" />
                  <Check className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-background">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-10 w-10 overflow-hidden">
                    <img alt="Michael T." className="object-cover" src="/placeholder.svg?height=40&width=40" />
                  </div>
                  <div>
                    <h3 className="font-bold">Michael T.</h3>
                    <p className="text-sm text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "As someone who takes multiple medications daily, RemindWell has simplified my routine. The app
                  integration is seamless and the pillbox is well-designed."
                </p>
                <div className="flex text-primary">
                  <Check className="h-5 w-5" />
                  <Check className="h-5 w-5" />
                  <Check className="h-5 w-5" />
                  <Check className="h-5 w-5" />
                  <Check className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-background md:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-10 w-10 overflow-hidden">
                    <img alt="Elena R." className="object-cover" src="/placeholder.svg?height=40&width=40" />
                  </div>
                  <div>
                    <h3 className="font-bold">Elena R.</h3>
                    <p className="text-sm text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I bought RemindWell for my grandmother and it's been incredible. The large compartments are easy for
                  her to open, and the reminders have improved her medication adherence significantly."
                </p>
                <div className="flex text-primary">
                  <Check className="h-5 w-5" />
                  <Check className="h-5 w-5" />
                  <Check className="h-5 w-5" />
                  <Check className="h-5 w-5" />
                  <Check className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden bg-muted">
                  <img
                    alt="RemindWell Smart Pillbox in use"
                    className="object-cover"
                    src="/placeholder.svg?height=600&width=600"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Ready to Simplify Your Medication Routine?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join thousands of satisfied customers who have improved their medication adherence with RemindWell.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Easy to set up and use</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Reliable reminders that work</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>30-day money-back guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Free shipping on all orders</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/product">
                    <Button size="lg" className="gap-1.5">
                      Get Your RemindWell
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about RemindWell.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 mt-12">
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-bold">How long does the battery last?</h3>
                <p className="mt-2 text-muted-foreground">
                  The RemindWell pillbox uses a rechargeable battery that lasts up to 7 days on a single charge. A USB-C
                  charging cable is included with your purchase.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-bold">Is the RemindWell app available for both iOS and Android?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, the RemindWell companion app is available for free download on both iOS and Android devices.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-bold">Can I set different reminder schedules for different days?</h3>
                <p className="mt-2 text-muted-foreground">
                  RemindWell allows you to create custom schedules for each day of the week, accommodating varying
                  medication needs.
                </p>
              </div>
              <div className="border rounded-lg p-6 bg-background">
                <h3 className="text-xl font-bold">What is the size of each compartment?</h3>
                <p className="mt-2 text-muted-foreground">
                  Each compartment measures 1.5" x 1.5" x 0.75", which is large enough to hold multiple pills of various
                  sizes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-6 py-8 px-4 md:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">RemindWell</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link href="#" className="text-sm hover:underline underline-offset-4">
                Terms
              </Link>
              <Link href="#" className="text-sm hover:underline underline-offset-4">
                Privacy
              </Link>
              <Link href="#" className="text-sm hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RemindWell. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

