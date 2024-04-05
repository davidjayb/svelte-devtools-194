<script>
  import { page } from "$app/stores";
  import TestUrlComponent from "$lib/TestURLComponent.svelte";

  export let data;

  const urlComponentProp = new URL($page.url);
</script>

<h1>Javascript Class</h1>
<p />
<TestUrlComponent urlProp={urlComponentProp} />
