import { useComputed, useSignal } from "@preact/signals";

export const GettingStarted = () => {
  const codeExamples = [
    "Shell example coming soon",
    "Node example coming soon",
    "Ruby example coming soon",
    "PHP example coming soon",
    "Python example coming soon",
    "Java example coming soon",
  ]

  const activeLang = useSignal(0);
  const languages = useSignal(["Shell","Node","Ruby","PHP","Python","Java"])
  const activeLangData = useComputed(() => codeExamples[activeLang.value]) 

  return(
    <section class="getting-started">
      <nav class="getting-started__tab-container">
      {languages.value.map((lang:string, i:number) => 
        <div
          class={`getting-started__tab${i===activeLang.value?"--active":""}`}
          onClick={() => activeLang.value = i}
        >
          {lang}
        </div>
      )}
      </nav>
      <article class="getting-started__code-block">
        {`> ${activeLangData.value}`}
      </article>
    </section>
  )
}