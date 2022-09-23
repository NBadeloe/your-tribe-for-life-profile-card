<script>
  import "../styles/global.css";
  import * as prismicH from '@prismicio/helpers';
  export let data;
  const { document } = data

</script>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
</head>
<body>
    <main>
      <section class="card-body">
        <article class="card-content">
          <img src="{document.data.image.url}" alt="girl on phone">
          <section class="card-text">
            <h1 class="name-title">Name</h1>
            <h1> {@html prismicH.asHTML(document.data.name)}</h1>
            <p class="bio-title">Nickname</p>
            <p> Mr.Worldwide305</p>
            <p class="bio-title">Bio</p>
            <p> {@html prismicH.asHTML(document.data.bio)}</p>
            <p class="github-title">Github</p>
            <a href="https://github.com/NBadeloe">Click here lol</a> 

          </section>
          
        </article>
        
        
      </section>
  </main>
</body>


