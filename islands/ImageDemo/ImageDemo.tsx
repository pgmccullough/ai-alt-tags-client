import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export const ImageDemo = () => {
  const altText = "Smiling young couple taking a selfie and waving on wooded road.";

  const animatedText = useSignal("")
  const animatedTextPos = useSignal(0);
  const imageTagOpen = useSignal("&lt;img<br />&nbsp;&nbsp;&nbsp;&nbsp;src=\"sample_preview_1.jpg\"");
  const imageTagClose = useSignal("&gt;");

  const animateText = () => {
    if(animatedTextPos.value <= altText.length) {
      animatedText.value = `alt="${altText.slice(0,animatedTextPos.value)}`;
      animatedTextPos.value++;
      setTimeout(() => animateText(),50);
    }
  }

  useEffect(() => {
    const initPause = setTimeout(() => {
      animatedText.value = "alt=\"";
    }, 2000);
    const writePause = setTimeout(() => {
      animateText();
    }, 4500)
    return () => {
      clearTimeout(initPause);
      clearTimeout(writePause);
    };
  },[])

  return (
    <section class="image-demo">
      <figure class="image-demo__image-border">
        <img
          src="/assets/images/sample_preview_1.jpg"
          class="image-demo__image"
        />
      </figure>
      <article class="image-demo__sample-code">
        <p dangerouslySetInnerHTML={{__html: imageTagOpen.value}} />
        {animatedText.value
          ?<>
            <p
              class="image-demo__alt-tag"
              dangerouslySetInnerHTML={{__html: `${animatedText.value}<div class="caret"></div>"`}}
            />
          </>
          :""
        }
        <p dangerouslySetInnerHTML={{__html: imageTagClose.value}} />
      </article>
    </section>
  )
}