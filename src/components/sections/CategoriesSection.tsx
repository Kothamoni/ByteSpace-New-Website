import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryCard from "@/components/cards/CategoryCard";
import { categories } from "@/data/categories";

export default function CategoriesSection() {
  return (
    <section className="pb-20">
      <Container>
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          text="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <CategoryCard key={c.name} {...c} />
          ))}
        </div>
      </Container>
    </section>
  );
}
