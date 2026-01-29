export function About() {
  return (
    <section
      id='about'
      className='py-20 bg-muted/30'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-8 text-foreground'>About Me</h2>
          <div className='text-lg text-muted-foreground space-y-6'>
            <p>
              I’ve been living in the stack since 2018, evolving from a standard web dev
              to an AI-driven builder. My obsession? Leveraging Generative AI (shoutout to
              Gemini) to solve the "impossible" parts of the dev lifecycle. Whether I’m
              fine-tuning LLM workflows or crafting high-performance backend systems, I’m
              all about creating tools that actually make life easier. When I’m not
              pushing code to GitHub, I’m probably analyzing sports data or exploring the
              intersection of Psychology and Tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
