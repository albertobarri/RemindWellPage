"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Bell, ChevronLeft, Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "RemindWell Smart Pillbox",
      price: 79.99,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
  ])
  const { toast } = useToast()

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
    })
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

  const handleCheckout = () => {
    toast({
      title: "Checkout initiated",
      description: "This would normally redirect to a payment processor",
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
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-12">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/product"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Product
            </Link>
          </div>
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
              <Link href="/product">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="border rounded-lg">
                  <div className="p-6">
                    <h2 className="font-semibold mb-4">Cart Items</h2>
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="w-20 h-20 rounded bg-muted flex-shrink-0 overflow-hidden">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 flex flex-col">
                            <div className="flex justify-between">
                              <h3 className="font-medium">{item.name}</h3>
                              <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                            <div className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</div>
                            <div className="flex items-center gap-4 mt-auto">
                              <div className="flex items-center border rounded-md">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-none"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-3 w-3" />
                                  <span className="sr-only">Decrease quantity</span>
                                </Button>
                                <span className="w-8 text-center text-sm">{item.quantity}</span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-none"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                  <span className="sr-only">Increase quantity</span>
                                </Button>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 px-2 text-muted-foreground"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="border rounded-lg">
                  <div className="p-6">
                    <h2 className="font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <div className="font-medium">Promo Code</div>
                        <div className="flex gap-2">
                          <Input placeholder="Enter code" className="flex-1" />
                          <Button variant="outline">Apply</Button>
                        </div>
                      </div>
                      <Button className="w-full" onClick={handleCheckout}>
                        Checkout
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>Free shipping on all orders</p>
                  <p>30-day money-back guarantee</p>
                  <p>Secure checkout</p>
                </div>
              </div>
            </div>
          )}
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

