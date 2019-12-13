import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import * as instagram from './Instagram.js';
import * as cats from './Cats.js';
import * as movies from './Movies.js';
import './App.css';


console.log(instagram.add(1, 2));

class NewsApiComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    let url = "https://newsapi.org/v2/everything?q=fortnite&from=2019-11-12&sortBy=publishedAt&apiKey=3c7a7bde959b42aa954054ba2f493814&language=en";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ).catch(console.log)

  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="column is-three-fifths is-offset-one-quarter catbox">
          <div className="cat">
            <div className="cat__body"></div>
            <div className="cat__body"></div>
            <div className="cat__tail"></div>
            <div className="cat__head"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="columns is-multiline is-mobile is-centered">

          {items.articles.map(item => (
            <div className="column is-6">
              <div className="box">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <a href={item.url}>
                        <strong className="mediaposts-title">{item.title}</strong> <small></small>
                      </a>
                      <p>{item.content}</p>
                    </div>
                    <nav className="level is-mobile">
                      <div className="level-left">
                        <a className="level-item" aria-label="reply">
                          <span className="icon is-small">
                            <i className="fas fa-reply" aria-hidden="true"></i>
                          </span>
                        </a>
                        <a className="level-item" aria-label="retweet">
                          <span className="icon is-small">
                            <i className="fas fa-retweet" aria-hidden="true"></i>
                          </span>
                        </a>
                        <a className="level-item" aria-label="like">
                          <span className="icon is-small">
                            <i className="fas fa-heart" aria-hidden="true"></i>
                          </span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>

            </div>
          ))}
        </div>
      );
    }
  }
}

class NewsFrApiComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    let url = "https://newsapi.org/v2/everything?q=fortnite&from=2019-11-12&sortBy=publishedAt&apiKey=3c7a7bde959b42aa954054ba2f493814&language=fr";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ).catch(console.log)

  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="column is-three-fifths is-offset-one-quarter catbox">
          <div className="cat">
            <div className="cat__body"></div>
            <div className="cat__body"></div>
            <div className="cat__tail"></div>
            <div className="cat__head"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="columns is-multiline is-mobile is-centered">

          {items.articles.map(item => (
            <div className="column is-6">
              <div className="box">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <a href={item.url}>
                        <strong className="mediaposts-title">{item.title}</strong> <small></small>
                      </a>
                      <p>{item.content}</p>
                    </div>
                    <nav className="level is-mobile">
                      <div className="level-left">
                        <a className="level-item" aria-label="reply">
                          <span className="icon is-small">
                            <i className="fas fa-reply" aria-hidden="true"></i>
                          </span>
                        </a>
                        <a className="level-item" aria-label="retweet">
                          <span className="icon is-small">
                            <i className="fas fa-retweet" aria-hidden="true"></i>
                          </span>
                        </a>
                        <a className="level-item" aria-label="like">
                          <span className="icon is-small">
                            <i className="fas fa-heart" aria-hidden="true"></i>
                          </span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>

            </div>
          ))}
        </div>
      );
    }
  }
}

class AjaxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://kame.tv/articleJson")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ).catch(console.log)
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="column is-three-fifths is-offset-one-quarter catbox">
          <div className="cat">
            <div className="cat__body"></div>
            <div className="cat__body"></div>
            <div className="cat__tail"></div>
            <div className="cat__head"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="columns is-multiline is-mobile is-centered">

          {items.map(item => (
            <div className="column is-6">
              <div className="box">
                <article className="media">
                  <div className="media-content">
                    <div className="content">
                      <Link to={`article/${item.slug}`}>
                        <img src={item.cover} className="mediapostimg" />
                        <strong className="mediaposts-title">{item.titre}</strong> <small></small>
                      </Link>
                    </div>
                    <nav className="level is-mobile">
                      <div className="level-left">
                        <a className="level-item" aria-label="reply">
                          <span className="icon is-small">
                            <i className="fas fa-reply" aria-hidden="true"></i>
                          </span>
                        </a>
                        <a className="level-item" aria-label="retweet">
                          <span className="icon is-small">
                            <i className="fas fa-retweet" aria-hidden="true"></i>
                          </span>
                        </a>
                        <a className="level-item" aria-label="like">
                          <span className="icon is-small">
                            <i className="fas fa-heart" aria-hidden="true"></i>
                          </span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>

            </div>
          ))}

        </div>
      );
    }
  }
}



const characters = [
  { id: 1, name: 'Hello', atck: '1', def: '1', spike: '1' },
  { id: 2, name: 'Helloggzgz', atck: '1', def: '1', spike: '1' },
];

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    document.addEventListener('DOMContentLoaded', () => {

      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        });
      }

    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


class Nav extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.state = {
      navmenuCollapsed: false
    };
  }

  handleClick() {
    if (!this.state.navmenuCollapsed) {

      document.addEventListener('click', this.handleOutsideClick, false);

    } else {

      var nav = document.getElementById('nav');
      nav.className = "navbar-burger burger";
      var navbarExampleTransparentExample = document.getElementById('navbarExampleTransparentExample');
      navbarExampleTransparentExample.className = "navbar-menu";

      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      navmenuCollapsed: !prevState.navmenuCollapsed,
    }));
  }

  handleOutsideClick(e) {
    this.handleClick();
  }

  render() {
    return (
      <nav className="navbar is-black">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="http://kame.tv/kame-logo-ecrit-blanc.svg" width="112" height="28" />
          </a>
          <div id="nav" className="navbar-burger burger" onClick={this.handleClick} data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">

          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                Liens
              </a>
              <div className="navbar-dropdown is-boxed">
                <Link to="/insta" className="navbar-item">Insta</Link>
                <Link to="/news" className="navbar-item">News Anglaises</Link>
                <Link to="/newsfr" className="navbar-item">News Françaises</Link>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet
                    </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.8.0/bulma-0.8.0.zip">
                    <span className="icon">
                      <i className="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </nav>
    );
  }
}

export default function TestFunction() {

  return (
    <Router>
      <Nav />
      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
       OK COOL MAIS UTILISER ROUTE LARAVEL OU SYMFONY
      */}
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/chat/:id">
          <cats.AppCat />
        </Route>
        <Route path="/insta">
          <instagram.RenderInstaPost instaposts={instagram.instaPosts} />
        </Route>
        <Route path="/cardboard">

        </Route>
        <Route path="/ajax">
          <AjaxComponent />
        </Route>
        <Route path="/article/:slug">
          <ShowArticle />
        </Route>
        <Route path="/news">
          <NewsApiComponent />
        </Route>
        <Route path="/newsfr">
          <NewsFrApiComponent />
        </Route>
        <Route path="/print">
          <PrintComponent />
        </Route>
        <Route path="/movies">
          <movies.Movies />
        </Route>
        <Route path="chatApp">
          <ChatApp/>
        </Route>
      </Switch>
    </Router>
  );
}

const messages = [
  {id: 1, content: 'hello'},
]

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.messages = messages;
  }
  render() {
    return (
      <div>
        {this.messages}
      </div>
    )
  }
}

class PrintComponent extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-6">
          <div className="content is-medium">
            <h1 class="title is-1">Restart Nginx</h1>
            <p>Restarting Nginx basically performs a stop then a start. Use one of the following commands to run a Nginx restart:</p>
            <code>service nginx restart</code><br />
            <code>systemctl restart nginx</code>
            <h1 class="title is-1">View Server Status</h1>
            <p>Check what the current status of your Nginx web server is with one of the following commands:</p>
            <code>service nginx status</code><br />
            <code>systemctl status nginx</code>
          </div>
        </div>
        <div className="column is-6">
          <div className="content is-medium">
            <h1 class="title is-1">Test Nginx Configuration</h1>
            <p>You can test your Nginx server’s configuration file before restarting or reloading it completely. This helps prevent any unforeseen errors which can cause your website to gown down. To do this there are two separate commands you can use, both return the same information:</p>
            <code>nginx -t</code><br />
          </div>
        </div>
      </div>
    )
  }
}

function Chara(props) {
  const clock = (
    <Clock />
  );

  const date = new Date('2018-05-18T04:00:00Z').toLocaleDateString();

  const bulma = props.characters.map((character) =>
    <div className="column is-three-fifths is-offset-one-fifth">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{character.name}</strong> <small>{date}</small>
                <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item" aria-label="reply">
                  <span className="icon is-small">
                    <i className="fas fa-reply" aria-hidden="true"></i>
                  </span>
                </a>
                <a className="level-item" aria-label="retweet">
                  <span className="icon is-small">
                    <i className="fas fa-retweet" aria-hidden="true"></i>
                  </span>
                </a>
                <a className="level-item" aria-label="like">
                  <span className="icon is-small">
                    <i className="fas fa-heart" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  );
  return (
    <div className="mediaposts">
      {clock}
      {bulma}
    </div>
  );
}


function ShowArticle() {
  return (
    <div>
      halo
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="carousel">
        <div className="slide"><img src="http://placehold.it/200x200/aaffaa/00aa00/&amp;text=First" />
          <p>First</p>
        </div>
        <div className="slide"><img src="http://placehold.it/200x200/ffaaff/ff00ff/&amp;text=Product+2" />
          <p>Product 2</p>
        </div>
        <div className="slide"><img src="http://placehold.it/200x200&amp;text=Product+3" />
          <p>Product 3</p>
        </div>
        <div className="slide"><img src="http://placehold.it/200x200/ffaaff/ff00ff/&amp;text=Product+4" />
          <p>Product 4</p>
        </div>
        <div className="slide"><img src="http://placehold.it/200x200&amp;text=Product+5" />
          <p>Product 5</p>
        </div>
        <div className="slide"><img src="http://placehold.it/200x200/ffaaff/ff00ff/&amp;text=Product+6" />
          <p>Product 6</p>
        </div>
        <div className="slide"><img src="http://placehold.it/200x200&amp;text=Product+7" />
          <p>Product 7</p>
        </div>
        <div className="slide"><img src="http://placehold.it/200x200/ffaaff/ff00ff/&amp;text=Product+8" />
          <p>Product 8</p>
        </div>
        <div className="slide"><img src="http://placehold.it/200x200&amp;text=Product+9" />
          <p>Product 9</p>
        </div>
        <div className="slide"><img src="http://placehold.it/200x200/ffaaff/ff00ff/&amp;text=Product+10" />
          <p>Product 10</p>
        </div>
        <div className="slide"><img src="http://placehold.it/200x200&amp;text=Product+11" />
          <p>Product 11</p>
        </div>
        <div className="slide"><img src="http://placehold.it/200x200/ffaaff/ff00ff/&amp;text=Last" />
          <p>Last</p>
        </div>
      </div>
      <Chara characters={characters} />
      <div class="mediaposts">
        <h1 className="mediaposts-title-news">News</h1>
        <div className="columns">
          <div className="column is-9">
            <AjaxComponent />
          </div>
          <div className="column is-3">
            Ahah oof hi
          </div>
        </div>
      </div>                                
      <cats.Cats catslist={cats.catslist} />
    </div>
  );
}