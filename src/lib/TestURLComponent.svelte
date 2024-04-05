<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  /**
   * @type {any}
   */
  export let urlProp;

  $: searchFilter = $page.url.searchParams.get("search");
  $: searchValue = searchFilter;

  const search = async () => {
    let url = new URL($page.url);
    if (searchValue) {
      url.searchParams.set("search", searchValue);
    } else {
      url.searchParams.delete("search");
    }

    url.searchParams.delete("offset");
    return goto(url.href, { noScroll: true });
  };
</script>

<body>
  URL SearchParams:
  <span>{searchFilter}</span>
  <p />
  URL Prop:
  <span>{urlProp}</span>
  <p />
  <input
    class="input"
    type="text"
    placeholder="Search"
    bind:value={searchValue}
    on:keydown={(event) => {
      if (event.key === "Enter") {
        search();
      }
    }}
  />
</body>
