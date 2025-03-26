"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, ChevronLeft, Minus, Plus, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const { toast } = useToast()

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} RemindWell Smart Pillbox added to your cart`,
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Bell className="h-6 w-6 text-primary" />
            <span>RemindWell</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  0
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-12">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden bg-muted">
                <img
                  alt="RemindWell Smart Pillbox"
                  className="object-cover"
                  src="/placeholder.svg?height=600&width=600"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-3xl font-bold">RemindWell Smart Pillbox</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">(128 reviews)</span>
                </div>
              </div>
              <div className="text-3xl font-bold">$79.99</div>
              <p className="text-muted-foreground">
                The RemindWell Smart Pillbox helps you stay on track with your medication schedule through timely
                reminders and easy organization. Features include customizable alerts, weekly organization with 28
                compartments, and medication tracking through our companion app.
              </p>
              <div className="flex flex-col gap-2 mt-4">
                <div className="font-medium">Key Features:</div>
                <ul className="grid gap-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <Bell className="h-4 w-4 text-primary" />
                    </div>
                    <span>Smart reminders via mobile app and built-in alarm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <Bell className="h-4 w-4 text-primary" />
                    </div>
                    <span>7-day organization with 4 time slots per day (28 total compartments)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <Bell className="h-4 w-4 text-primary" />
                    </div>
                    <span>Rechargeable battery with up to 7 days of use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <Bell className="h-4 w-4 text-primary" />
                    </div>
                    <span>Companion app for iOS and Android</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-none"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-none"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
                <Button className="flex-1" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
              <div className="mt-6 text-sm text-muted-foreground">
                <p>Free shipping on all orders</p>
                <p>30-day money-back guarantee</p>
                <p>1-year warranty included</p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start border-b rounded-none">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Product Description</h3>
                  <p>
                    The RemindWell Smart Pillbox is designed to help you manage your medications with ease and
                    confidence. With its intuitive design and smart technology, RemindWell ensures you never miss a dose
                    again.
                  </p>
                  <p>
                    Our pillbox features 28 compartments organized into 7 days with 4 time slots each (morning, noon,
                    evening, and night). Each compartment is spacious enough to hold multiple pills of various sizes,
                    making it perfect for those with complex medication regimens.
                  </p>
                  <p>
                    The RemindWell companion app allows you to set custom reminders for each medication time. When it's
                    time to take your medication, you'll receive a notification on your phone, and the corresponding
                    compartment on the pillbox will light up and sound an alarm. The alarm can be customized or disabled
                    based on your preferences.
                  </p>
                  <p>
                    The app also tracks your medication history, allowing you to monitor your adherence over time. This
                    information can be shared with healthcare providers to ensure optimal treatment outcomes.
                  </p>
                  <p>
                    RemindWell is powered by a rechargeable battery that lasts up to 7 days on a single charge. A USB-C
                    charging cable is included with your purchase.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Technical Specifications</h3>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-b pb-2">
                      <div className="font-medium">Dimensions</div>
                      <div>8.5" x 5.5" x 1.5" (21.6 x 14 x 3.8 cm)</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-b pb-2">
                      <div className="font-medium">Weight</div>
                      <div>12 oz (340 g)</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-b pb-2">
                      <div className="font-medium">Compartment Size</div>
                      <div>1.5" x 1.5" x 0.75" (3.8 x 3.8 x 1.9 cm)</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-b pb-2">
                      <div className="font-medium">Battery</div>
                      <div>Rechargeable lithium-ion, 1000mAh, up to 7 days of use</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-b pb-2">
                      <div className="font-medium">Charging</div>
                      <div>USB-C, cable included</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-b pb-2">
                      <div className="font-medium">Connectivity</div>
                      <div>Bluetooth 5.0</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-b pb-2">
                      <div className="font-medium">App Compatibility</div>
                      <div>iOS 12.0+ and Android 8.0+</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-b pb-2">
                      <div className="font-medium">Water Resistance</div>
                      <div>Splash resistant (IPX4)</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="font-medium">Package Contents</div>
                      <div>RemindWell Smart Pillbox, USB-C charging cable, Quick start guide</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="pt-6">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Customer Reviews</h3>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold">4.9</div>
                    <div>
                      <div className="flex">
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <Star className="h-5 w-5 fill-primary text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">Based on 128 reviews</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <div className="font-medium">Sarah J.</div>
                        <div className="text-sm text-muted-foreground">Verified Purchase</div>
                      </div>
                      <div className="flex my-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </div>
                      <p className="text-sm">
                        RemindWell has been a game-changer for managing my parents' medications. The reminders give me
                        peace of mind knowing they won't miss important doses. The compartments are easy to open, even
                        for my father who has arthritis. Highly recommend!
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <div className="font-medium">Michael T.</div>
                        <div className="text-sm text-muted-foreground">Verified Purchase</div>
                      </div>
                      <div className="flex my-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </div>
                      <p className="text-sm">
                        As someone who takes multiple medications daily, RemindWell has simplified my routine. The app
                        integration is seamless and the pillbox is well-designed. Battery life is excellent - I only
                        need to charge it once a week.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <div className="font-medium">Elena R.</div>
                        <div className="text-sm text-muted-foreground">Verified Purchase</div>
                      </div>
                      <div className="flex my-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </div>
                      <p className="text-sm">
                        I bought RemindWell for my grandmother and it's been incredible. The large compartments are easy
                        for her to open, and the reminders have improved her medication adherence significantly.
                        Customer service was also excellent when I had questions about setup.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
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

