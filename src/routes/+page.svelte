<script>
  import { page } from "$app/stores";
  import TestArrayComponent from "$lib/TestArrayComponent.svelte";
  import TestPropComponent from "$lib/TestPropComponent.svelte";
  import TestFunctionComponent from "$lib/TestFunctionComponent.svelte";

  export let data;
</script>

<h1>Prop Object</h1>
<p />
<TestPropComponent exampleProp={data.examplePropObject} />

<h1>Prop Class</h1>
<p />
<TestPropComponent exampleProp={data.examplePropClass} />

<h1>Function Object</h1>
<p />
<TestFunctionComponent exampleProp={data.exampleFunctionObject} />

<h1>Function Class</h1>
<p />
<TestFunctionComponent exampleProp={data.exampleFunctionClass} />

<h1>Array Object</h1>
<p />
<TestArrayComponent arrayProp={data.examplePropObjectArray} />

<h1>Array Class</h1>
<p />
<TestArrayComponent arrayProp={data.examplePropClassArray} />
