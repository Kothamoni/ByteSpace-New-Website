export type Course = {
  id: number;
  title: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  author: string;
  level: string;
  price: string;
};

const base = {
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  author: "purepearl studio",
  level: "Beginner",
  price: "$25",
};

export const courses: Course[] = [
  { id: 1, title: "Learn Figma from Basic", image: "/images/courses/course-1.jpg", ...base },
  { id: 2, title: "Build Digital Asset", image: "/images/courses/course-2.jpg", ...base },
  { id: 3, title: "the Power of Big Data", image: "/images/courses/course-3.jpg", ...base },
  { id: 4, title: "Balancing Productivity and Life", image: "/images/courses/course-4.jpg", ...base },
  { id: 5, title: "Mastering Money Management", image: "/images/courses/course-5.jpg", ...base },
  { id: 6, title: "From Idea to Startup Success", image: "/images/courses/course-6.jpg", ...base },
];

export const courseTags = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media",
  "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts",
  "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity",
  "Web Development", "Data Science", "Cooking",
];
