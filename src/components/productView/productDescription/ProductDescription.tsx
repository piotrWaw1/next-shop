import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ProductDescription() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">Product Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Experience premium audio quality with our flagship wireless headphones. Featuring advanced noise
              cancellation technology, these headphones deliver crystal-clear sound whether you're commuting, working,
              or relaxing at home.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The ergonomic design ensures comfort during extended listening sessions, while the premium materials
              provide durability that lasts. With up to 30 hours of battery life and quick-charge capability, you'll
              never miss a beat.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="space-y-2">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Active Noise Cancellation</li>
                  <li>• 30-hour battery life</li>
                  <li>• Premium leather ear cushions</li>
                  <li>• Bluetooth 5.0 connectivity</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">What's in the Box:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Wireless headphones</li>
                  <li>• USB-C charging cable</li>
                  <li>• Carrying case</li>
                  <li>• Quick start guide</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold">Technical Specs</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Driver Size:</span>
                    <span>40mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Frequency Response:</span>
                    <span>20Hz - 20kHz</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Impedance:</span>
                    <span>32 Ohms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weight:</span>
                    <span>250g</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Connectivity</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bluetooth:</span>
                    <span>5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Range:</span>
                    <span>10m / 33ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Codecs:</span>
                    <span>SBC, AAC, aptX</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Charging:</span>
                    <span>USB-C</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="shipping" className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold">Shipping Options</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Standard Shipping:</span>
                    <span>5-7 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Express Shipping:</span>
                    <span>2-3 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Overnight:</span>
                    <span>Next business day</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Return Policy</h4>
                <p className="text-sm text-muted-foreground">
                  30-day return policy. Items must be in original condition with all packaging. Return shipping is free
                  for defective items.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
