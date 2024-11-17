import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, BookOpen, Heart, TrendingUp, Shield, Leaf } from "lucide-react";

export default function Priorities() {
  const priorities = [
    {
      title: "Economic Growth",
      description: "Creating jobs and fostering innovation through strategic investments and small business support.",
      icon: TrendingUp,
      details: [
        "Support for small businesses",
        "Job training programs",
        "Infrastructure investment"
      ]
    },
    {
      title: "Education",
      description: "Ensuring quality education is accessible and affordable for all students.",
      icon: BookOpen,
      details: [
        "Reduce student debt",
        "Increase teacher pay",
        "Modernize classrooms"
      ]
    },
    {
      title: "Healthcare",
      description: "Making healthcare accessible and affordable while improving quality of care.",
      icon: Heart,
      details: [
        "Lower prescription costs",
        "Protect pre-existing conditions",
        "Expand mental health services"
      ]
    },
    {
      title: "Public Safety",
      description: "Ensuring our communities are safe while promoting justice system reforms.",
      icon: Shield,
      details: [
        "Community policing",
        "Emergency response",
        "Prevention programs"
      ]
    },
    {
      title: "Environment",
      description: "Protecting our natural resources and promoting clean energy solutions.",
      icon: Leaf,
      details: [
        "Clean energy jobs",
        "Conservation efforts",
        "Climate action"
      ]
    },
    {
      title: "Fiscal Responsibility",
      description: "Managing taxpayer dollars wisely while investing in our future.",
      icon: BarChart,
      details: [
        "Balanced budgets",
        "Smart investments",
        "Eliminate waste"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Campaign Priorities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {priorities.map((priority, index) => (
          <Card key={index}>
            <CardHeader>
              <priority.icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{priority.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{priority.description}</p>
              <ul className="space-y-2">
                {priority.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}