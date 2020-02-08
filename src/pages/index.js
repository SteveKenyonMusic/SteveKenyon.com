import React, { Fragment } from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Head from "../components/helmetHead"
import Header from "../components/headerAndIntro"
import Footer from "../components/footer"
import indexStyles from "../styles/Modules/index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      nyphil: file(relativePath: { eq: "nyPhilSaxes.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      composer: file(relativePath: { eq: "composerHeadshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      conducting: file(relativePath: { eq: "conducting.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nysq: file(relativePath: { eq: "nysqPerfPhoto1.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const removeClass = () => { document.getElementById('emailAlert').classList.remove(indexStyles.show) }

  const onEmailClick = async () => {

    const copyText = document.getElementById("emailAddressHidden") // select hidden input

    copyText.focus() // focus
    copyText.select() // select
    document.execCommand("copy") // copy to clipboard
    document.getElementById("emailAlert").classList.add(indexStyles.show) // start animation
    setTimeout(removeClass, 3100)
  }

  return (
    <Fragment>
      <Head title="Index" />
      <Header className={indexStyles.header} id="top" />
      <main className={indexStyles.main}>
        <section className={indexStyles.about} id="about">
          <div className={indexStyles.about_container}>
            <h2
              className={`${indexStyles.header_2} ${indexStyles.u_center} ${indexStyles.u_margin_bottom_huge}`}
            >
              About
            </h2>
            <div className={indexStyles.about_content}>
              <p
                className={`${indexStyles.about_text} ${indexStyles.u_margin_bottom_medium}`}
              >
                STEVE KENYON has performed his original music at the Blue Note,
                Birdland, Carnegie Hall and live on WNYC radio. He plays
                regularly with The NY Philharmonic when saxophones are required,
                and has worked with many other ensembles, from Philip Glass to
                Maria Schneider to The Who. He plays each year for the Tony
                Awards, Kennedy Center Honors and Encores! at NY City Center.
              </p>
              <p
                className={`${indexStyles.about_text} ${indexStyles.u_margin_bottom_medium}`}
              >
                In addition to his compositions for the
                <a
                  href="http://www.nysaxophonequartet.com/NYSQ/Home.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={indexStyles.about_link}
                >
                  NY Saxophone Quartet
                </a>
                , where he plays soprano, his original music is played by the
                NewYorkestra big band and the Pit Stop Players; groups of which
                he is also a member. He has had pieces commissioned by
                Synchronicity, The Triton Brass Quintet, The International
                Double Reed Society and NJCU. Some of his work is published by
                3-2 Music. He was awarded a Downbeat magazine jazz composition
                award as a student.
              </p>
              <p
                className={`${indexStyles.about_text} ${indexStyles.u_margin_bottom_medium}`}
              >
                Currently playing Reed 1 at Mean Girls, he can be heard on
                dozens of Broadway albums. Other recordings: his own Fidel’s
                Nightmare, and albums with Audra McDonald, NewYorkestra, Maria
                Schneider, Gil Evans Project, Barbara Cook, Gotham Jazz
                Orchestra, Tony Trishka, Judy Collins, and lots more. Live TV
                includes many Lincoln Center and Kennedy Center events, Sound of
                Music, Peter Pan, Today, Letterman. Other TV - Smash, Ed, Wonder
                Pets, many jingles. Film - West Side Story (2020, with the NY
                Philharmonic), Hollywoodland, Hail, Caesar!, and What Just
                Happened, for which he also wrote some of the orchestrations.
              </p>
              <p className={`${indexStyles.about_text} `}>
                A National Merit Scholar, he has bachelor’s and master’s degrees
                from The University of Miami, and teaches at Hofstra University.
              </p>
              <div className={indexStyles.about_imgContainer}>
                <figure className={indexStyles.about_figure}>
                  <Img
                    className={indexStyles.about_img}
                    fluid={data.nyphil.childImageSharp.fluid}
                    alt="Steve playing saxophone with the NY Phil"
                  />
                  <figcaption className={indexStyles.about_figure_caption}>
                    NY Philharmonic Live from Lincoln Center 2019
                  </figcaption>
                </figure>
                <figure className={indexStyles.about_figure}>
                  <Img
                    className={indexStyles.about_img}
                    fluid={data.nysq.childImageSharp.fluid}
                    alt="Steve playing saxophone with the NY Saxophone Quartet"
                  />
                  <figcaption className={indexStyles.about_figure_caption}>
                    <a
                      href="http://www.nysaxophonequartet.com/NYSQ/Home.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${indexStyles.about_link} ${indexStyles.about_figure_caption_link}`}
                    >
                      NY Saxophone Quartet
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className={indexStyles.compositions} id="compositions">
          <div className={indexStyles.compositions_container}>
            <h2
              className={`${indexStyles.header_2} ${indexStyles.compositions_header_2} ${indexStyles.u_right} ${indexStyles.u_margin_right} ${indexStyles.u_margin_bottom_huge}`}
            >
              compositions
            </h2>
            <figure className={indexStyles.compositions_img_1_container}>
              <Img
                className={indexStyles.compositions_img_1}
                fluid={data.composer.childImageSharp.fluid}
                alt="Steve by a piano"
              />
            </figure>

            <div className={indexStyles.compositions_group}>
              <h3
                className={`${indexStyles.compositions_group_header} ${indexStyles.header_3} ${indexStyles.u_margin_bottom_small}`}
              >
                Saxophone Quartet
              </h3>
              <ul className={indexStyles.compositions_ul}>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=0INLCobg0pw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Three Intentions
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=pH3VqHZkSFw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    A Brief Hello
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>Best of Seven</li>
                <li className={indexStyles.compositions_li}>Look Down</li>
                <li className={indexStyles.compositions_li}>
                  Chrismastime is Here (Guaraldi, arr. Kenyon)
                </li>
              </ul>
            </div>
            <div className={indexStyles.compositions_group}>
              <h3
                className={`${indexStyles.compositions_group_header} ${indexStyles.header_3} ${indexStyles.u_margin_bottom_small}`}
              >
                Big Band
              </h3>
              <ul className={indexStyles.compositions_ul}>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://3-2music.com/shop/sink-or-swim-download-only/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sink or Swim
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                  Languid and Bittersweet
                </li>
              </ul>
            </div>
            <div className={indexStyles.compositions_group}>
              <h3
                className={`${indexStyles.compositions_group_header} ${indexStyles.header_3} ${indexStyles.u_margin_bottom_small}`}
              >
                Woodwinds
              </h3>
              <ul className={indexStyles.compositions_ul}>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=d5Te-0lV-rY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Elegy (clarinet and piano)
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=vgCd1Mdm82E&t=5s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Love Song (clarinet solo)
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                  Burton Lane Medley (doubling woodwind trio)
                </li>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=-gffxyCwWFo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Doubler&apos;s Dilemma (doubling woodwind trio)
                  </a>
                </li>
                <li className={indexStyles.compositions_li}>
                  The Day After Yesterday (quintet of woodwind doublers)
                </li>
                <li className={indexStyles.compositions_li}>
                  The Next Day (quintet of woodwind doublers)
                </li>
              </ul>
            </div>
            <div className={indexStyles.compositions_group}>
              <h3
                className={`${indexStyles.compositions_group_header} ${indexStyles.header_3} ${indexStyles.u_margin_bottom_small}`}
              >
                Other
              </h3>
              <ul className={indexStyles.compositions_ul}>
                <li className={indexStyles.compositions_li}>
                  Das Lied von der Subway (piccolo and tuba)
                </li>
                <li className={indexStyles.compositions_li}>
                  <a
                    className={indexStyles.compositions_a}
                    href="https://www.youtube.com/watch?v=FesEy1Kh91k"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Death of Webern (violin, viola, cello, bass, piano, drum
                    set)
                  </a>
                </li>
              </ul>
            </div>

            <figure className={indexStyles.compositions_img_2_container}>
              <Img
                className={indexStyles.compositions_img_2}
                fluid={data.conducting.childImageSharp.fluid}
                alt="Steve conducting at a recording session for his piece"
              />
              <figcaption
                className={indexStyles.forJustJumpingFromNav}
                id="contact"
              ></figcaption>
            </figure>
          </div>
        </section>
        <section className={indexStyles.contact}>
          <h3
            className={`${indexStyles.header_3} ${indexStyles.contact_header} `}
          >
            contact me at:
          </h3>
          <button
            onClick={onEmailClick}
            id="email"
            className={`${indexStyles.contact_email}`}
          >
            SteveKenyonMusic@gmail.com
          </button>
          <input tabIndex="-1" type="text" className={indexStyles.hideInput} id="emailAddressHidden" value="SteveKenyonMusic@gmail.com" readOnly/>
          <div className={indexStyles.contact_email_alert} id="emailAlert">Email was copied to your clipboard!</div>
        </section>
      </main>
      <Footer />
    </Fragment>
  )
}

export default IndexPage
