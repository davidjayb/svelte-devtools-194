<script>
  /**
   * @type {any}
   */
  export let arrayProp;
</script>

<body>
  {#each arrayProp as prop}
    <p />
    Prop:
    <span>{JSON.stringify(prop)}</span>
    <p />
    Prop Function:
    <span>{prop.className}</span>
  {/each}
</body>
