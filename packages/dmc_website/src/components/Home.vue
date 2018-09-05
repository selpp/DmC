<template>
  <div id="home">
    <section id="dmc" :style="dmc">
      <div id="dmc-title">
        <h1>DmC</h1>
        <h3>Draw my Code</h3>
      </div>
      <p>
        The code driven presentation tool built for developpers.
        Generate gorgeous presentations using the DmC script language.
        Use arrows to navigate between slides.
      </p>
      <div id="dmc-buttons">
        <button @click="redirect('https://github.com/selpp/dmc')" v-on:mouseover="hover">Github</button>
      </div>
    </section>

    <section id="features">
      <h1>Features</h1>
      <div id="features-content">
        <div>
          <h2><font-awesome-icon icon="child" /> Gorgeous</h2>
          <p>
            DmC Generates beautiful code driven presentations.
            The presentation contains animations for scrolling,
            modals and a beautiful dark theme to avoid any eye injury.
          </p>
        </div>
        <div>
          <h2><font-awesome-icon icon="chess-queen" /> Simple</h2>
          <p>
            DmC is easy to use and user friendly.
            You just need a text editor and a web browser.
            Upload your source file, your '.dmc' script and this is it.
          </p>
        </div>
        <div>
          <h2><font-awesome-icon icon="coffee" /> Open Source</h2>
          <p>
            DmC is an Open Source projet.
            You can use it freely without worrying about adds or any charge.
            Feel free to propose new features for future versions but keep in mind
            DmC has to be simple and serve developpers.
          </p>
        </div>
        <div>
          <h2><font-awesome-icon icon="spinner" /> Static WebPage</h2>
          <p>
            DmC's web page is static. It does not require any page refresh.
            It has been developed using VueJS.
            It may use some advance web future.
            Please refer to the tutorial for more informations.
          </p>
        </div>
      </div>
    </section>

    <section id="creators">
      <h1>Contacts</h1>
      <div id="creators-content">

        <div class="creator">
          <div class="creator-profile">
            <img src="@/assets/yliess.jpeg" />
            <h2>Yliess HATI</h2>
          </div>
          <div class="creator-links">
            <a @click="redirect('https://github.com/yliess86')" v-on:mouseover="hover">Github</a>
            <a @click="redirect('https://www.linkedin.com/in/yliess-hati/')" v-on:mouseover="hover">Linkedin</a>
          </div>
        </div>

        <div class="creator">
          <div class="creator-profile">
            <img src="@/assets/gregor.jpeg" />
            <h2>Gregor JOUET</h2>
          </div>
          <div class="creator-links">
            <a @click="redirect('https://github.com/WIN32GG')" v-on:mouseover="hover">Github</a>
            <a @click="redirect('https://www.linkedin.com/in/gjouet/')" v-on:mouseover="hover">Linkedin</a>
          </div>
        </div>

      </div>
    </section>

    <section id="soon">
      <h1>Comming Soon</h1>
      <ul>
        <li>Show sound</li>
        <li>Websocket Q&A after presentation</li>
      </ul>
      <div id="soon-footer">
        <div id="soon-logo">DmC</div>
        <img id="selpp" @click="redirect('https://github.com/selpp')" src="@/assets/selpp.png"/>
      </div>
    </section>
  </div>
</template>

<script>
import sound from '@/sound/sound';

export default {
  name: 'Home',
  methods: {
    redirect: function(path) { this.click(); window.open(path); },
    hover: function() { sound.play('BUTTON_HOVER'); },
    click: function() { sound.play('BUTTON_CLICK'); }
  }
}
</script>

<style scoped>
#home {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

#dmc {
  width: 100%;
  text-align: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0.62),
    rgba(0, 0, 0, 0.62)),
    url('../assets/bckg.png');
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 65px;
  padding: 50px 0px;
  text-shadow: #000 1px 0px 20px;
}
#dmc h1 {
  font-size: 150px;
  font-weight: bold;
  line-height: 150px;
  margin: 0px;
  padding: 0px;
  border: solid 10px #dadee7;
}
#dmc-title {
  margin: 25px 0;
}
#dmc h3 {
  font-size: 40px;
  font-weight: bold;
  line-height: 35px;
  padding: 0px;
  margin: 0px;
}
#dmc p {
  width: 50%;
  margin: auto;
  font-size: 25px;
  font-weight: bold;
  margin: 25px 0;
}

#features {
  width: 100%;
  padding: 100px 0px;
  background-color: #dadee7;
  color: #4a4e58;
}
#features h1 {
  margin: 0px;
  padding: 0px;
  font-size: 25px;
  line-height: 25px;
  font-weight: bold;
  color: #17181c;
  margin-bottom: 25px;
}
#features-content {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  max-width: 60%;
  margin-top: 60px;
}
#features-content h2 {
  font-size: 20px;
  line-height: 20px;
  margin: 0px;
  padding: 0px;
  color: #3e19a7;
}
#features-content p {
  text-align: justify;
  font-size: 18px;
  line-height: 18px;
  margin: 0px;
  padding: 0px;
  margin-top: 25px;
}

#soon {
  width: 100%;
  padding: 50px 0px 0px 0px;
}
#soon h1 {
  margin: 0px;
  padding: 0px;
  font-size: 25px;
  line-height: 25px;
  font-weight: bold;
  margin-bottom: 25px;
}
#soon li {
  margin-bottom: 10px;
  text-align: justify;
}
#soon-logo {
  font-weight: bold;
  font-size: 40px;
  border: solid 4px #dadee7;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 20px;
}
#soon-footer {
  width: 100%;
  margin-top: 20px;
  padding: 25px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}
#selpp {
  height: 50px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 20px;
  cursor: pointer;
}

#dmc-buttons button {
  border: none;
  border: solid 5px #3e19a7;
  padding: 10px 15px;
  line-height: 25px;
  margin-top: 50px;
  transition: 0.4s;
}
#dmc-buttons button:hover {
  background-color: rgba(62, 25, 167, 0.5);
}

#creators {
  width: 100%;
  padding: 100px 0px 50px 0px;
  background: linear-gradient(
    rgba(0, 0, 0, 0.62),
    rgba(0, 0, 0, 0.62)),
    url('../assets/bckg.png');
  background-repeat: no-repeat;
  background-size: cover;
}
#creators h1 {
  margin: 0px;
  padding: 0px;
  font-size: 25px;
  line-height: 25px;
  font-weight: bold;
  margin-bottom: 25px;
}
#creators-content {
  width: 70%;
  padding: 50px 0px;
  margin: 0px auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-content: center;
}
.creator {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 300px;
  margin: auto;
}
.creator-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.creator-profile img {
  height: 100%;
  width: 100%;
  margin: auto;
  border-radius: 10px 10px 0px 0px;
}
.creator-profile h2 {
  margin: 0px;
  padding: 0px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
.creator-links {
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.creator-links a {
  margin: 15px 10px;
  text-decoration: none;
  border: solid 5px #3e19a7;
  padding: 10px 15px;
  transition: 0.4s;
  color: #dadee7;
  cursor: pointer;
  font-weight: bold;
}
.creator-links a:hover {
  background-color: rgba(62, 25, 167, 0.5);
}

section {
  margin: auto;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
