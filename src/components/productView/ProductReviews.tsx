"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ThumbsUp, ThumbsDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/woman-profile.png",
    rating: 5,
    date: "2 weeks ago",
    title: "Excellent sound quality!",
    content:
      "These headphones exceeded my expectations. The noise cancellation is fantastic and the battery life is exactly as advertised. Highly recommend!",
    helpful: 12,
    verified: true,
  },
  {
    id: 2,
    name: "Mike Chen",
    avatar: "/man-profile.png",
    rating: 4,
    date: "1 month ago",
    title: "Great value for money",
    content:
      "Really impressed with the build quality and comfort. The only minor issue is that they can get a bit warm during long listening sessions.",
    helpful: 8,
    verified: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "/woman-profile-two.png",
    rating: 5,
    date: "3 weeks ago",
    title: "Perfect for work from home",
    content:
      "The noise cancellation is a game-changer for video calls. Crystal clear audio and the microphone quality is excellent.",
    helpful: 15,
    verified: false,
  },
]

export function ProductReviews() {
  const [newReview, setNewReview] = useState("")
  const [newRating, setNewRating] = useState(0)

  const renderStars = (rating: number, interactive = false) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
        } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
        onClick={interactive ? () => setNewRating(i + 1) : undefined}
      />
    ))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Customer Reviews</CardTitle>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(4)}</div>
              <span className="text-lg font-semibold">4.3 out of 5</span>
            </div>
            <span className="text-muted-foreground">Based on 128 reviews</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Review Stats */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 text-sm">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center gap-2">
                <span>{stars}</span>
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${stars === 5 ? 60 : stars === 4 ? 25 : stars === 3 ? 10 : 3}%` }}
                  />
                </div>
                <span className="text-muted-foreground">
                  {stars === 5 ? "77" : stars === 4 ? "32" : stars === 3 ? "13" : "4"}
                </span>
              </div>
            ))}
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                    <AvatarFallback>
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{review.name}</h4>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified Purchase
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <h5 className="font-medium">{review.title}</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">{review.content}</p>
                    <div className="flex items-center gap-4 pt-2">
                      <Button variant="ghost" size="sm" className="text-xs">
                        <ThumbsUp className="w-3 h-3 mr-1" />
                        Helpful ({review.helpful})
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <ThumbsDown className="w-3 h-3 mr-1" />
                        Not helpful
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Write a Review */}
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Write a Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Rating</label>
                <div className="flex gap-1">{renderStars(newRating, true)}</div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Review</label>
                <Textarea
                  placeholder="Share your thoughts about this product..."
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  rows={4}
                />
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Submit Review</Button>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}
