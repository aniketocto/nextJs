export default function Docs({
  params,
}: {
  params: {
    slugs: string[];
  };
}) {
  if (params.slugs?.length === 1) {
    return <h1>Viewing docs for feature {params.slugs[0]} </h1>;
  } else if (params.slugs?.length === 2) {
    return (
      <h1>
        Viewing docs for features {params.slugs[0]} and concept {params.slugs[1]}
      </h1>
    );
  }

  return <h1>Docs Home Page</h1>;
}
