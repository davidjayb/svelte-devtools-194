<script>
  /**
   * @type {any}
   */
  export let exampleProp;
</script>

<body>
  <p />
  Prop:
  <span>{JSON.stringify(exampleProp)}</span>
  <p />
  Prop Function:
  <span>{exampleProp.getClassName()}</span>
</body>
