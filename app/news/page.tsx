import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function News() {
  const articles = [
    {
      title: "Sarah Mitchell Announces Education Reform Plan",
      date: "March 1, 2024",
      excerpt: "Comprehensive proposal aims to improve schools and support teachers across the state.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Campaign Launches Community Outreach Initiative",
      date: "February 28, 2024",
      excerpt: "New program will connect directly with voters in underserved communities.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mitchell Leads Forum on Economic Development",
      date: "February 25, 2024",
      excerpt: "Local business leaders join discussion on creating jobs and growing the economy.",
      image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Healthcare Town Hall Draws Large Crowd",
      date: "February 20, 2024",
      excerpt: "Residents share concerns and ideas about improving healthcare access.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Campaign News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <Card key={index} className="overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                {article.date}
              </div>
              <CardTitle className="text-xl">{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <Link
                href="#"
                className="text-primary hover:underline font-medium"
              >
                Read More →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}