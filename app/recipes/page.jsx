import RecipesContainer from "@/components/RecipesContainer";

export default function RecipesPage({ searchParams }) {
  return (
    <section>
      <RecipesContainer searchParams={searchParams} />
    </section>
  );
}
