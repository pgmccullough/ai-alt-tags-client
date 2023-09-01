import { useSignal } from "@preact/signals";

export const ImageDemo = () => {
  const imageTextTop = useSignal("&lt;img<br />&nbsp;&nbsp;&nbsp;&nbsp;src=\"sample_preview_1.jpg\"");
  const imageTextBottom = useSignal("&gt;");
  return (
    <section class="image-demo">
      <figure class="image-demo__image-border">
        <img
          src="/assets/images/sample_preview_1.jpg"
          class="image-demo__image"
        />
      </figure>
      <article class="image-demo__sample-code">
        <p dangerouslySetInnerHTML={{__html: imageTextTop.value}} />
        <p dangerouslySetInnerHTML={{__html: imageTextBottom.value}} />
      </article>
    </section>
  )
}