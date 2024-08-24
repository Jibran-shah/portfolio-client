import React,{Suspense,lazy} from 'react'
import styles from './home.module.css'

import About from '../../components/about/About'
import HeroSection from '../../components/heroSection/HeroSection'
import Container from '../../components/container/container'

const Services =lazy(()=>import('../../components/services/Services'));
const Skills =lazy(()=>import('../../components/skills/Skills')); 
const Resume = lazy(()=>import('../../components/resume/Resume'));
const Portfolios = lazy(()=>import( '../../components/portfolios/Portfolios'));
const Reviews =lazy(()=>import('../../components/reviews/Reviews'));
const Blogs  = lazy(()=>import('../../components/blogs/HomeBlogs/Blogs'));
const Contact= lazy(()=>import('../../components/contact/Contact'));

export default function 
Home() {
  return (
    <div className={styles.Home}>
        <main>
            <Container>
                <HeroSection/>
            </Container>
            <Container>
                <About/>
            </Container>
            <Container>
            <Suspense fallback={<div>loading ...</div>}>
                <Services/>
            </Suspense>
            </Container>
            <Container>
            <Suspense fallback={<div>loading ...</div>}>
                <Skills/>
            </Suspense>
            </Container>
            <Container>
            <Suspense fallback={<div>loading ...</div>}>
                <Resume/>
            </Suspense>
            </Container>
            <Container>
            <Suspense fallback={<div>loading ...</div>}>
                <Portfolios/>
            </Suspense>
            </Container>
            <Container>
            <Suspense fallback={<div>loading ...</div>}>
                <Reviews/>
            </Suspense>
            </Container>
            <Container>
            <Suspense fallback={<div>loading ...</div>}>
                <Blogs/>
            </Suspense>
            </Container>
            <Container>
            <Suspense fallback={<div>loading ...</div>}>
                <Contact/>
            </Suspense>
            </Container>
        </main>
    </div>
  )
}
