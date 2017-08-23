import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  min-height: 5em;
`

const Content = styled.article`
  padding: 10px 15px;
`

const About = () => (
  <div>
    <Header>
      <h2>Oh hello there</h2>
      <Content>
        <p>
          The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started. A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm. The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key.
        </p>
        <p>
          Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there. The key is to enjoy life, because they don’t want you to enjoy life. I promise you, they don’t want you to jetski, they don’t want you to smile. Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there. Don’t ever play yourself. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.
        </p>
        <p>
          I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. They key is to have every key, the key to open every door. Give thanks to the most high. Bless up. The key is to drink coconut, fresh coconut, trust me. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started.
        </p>
        <p>
          Lion! Special cloth alert. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? I’m up to something. Life is what you make it, so let’s make it. Give thanks to the most high. Look at the sunset, life is amazing, life is beautiful, life is what you make it.
        </p>
        <p>
          How’s business? Boomin. Give thanks to the most high. Eliptical talk. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. Surround yourself with angels. How’s business? Boomin.
        </p>
        <p>
          Congratulations, you played yourself. You smart, you loyal, you a genius. Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. The key is to enjoy life, because they don’t want you to enjoy life. I promise you, they don’t want you to jetski, they don’t want you to smile. They will try to close the door on you, just open it. The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key.
        </p>
        <p>
          The key to more success is to get a massage once a week, very important, major key, cloth talk. Mogul talk. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise. The key to more success is to get a massage once a week, very important, major key, cloth talk. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started.
        </p>
        <p>
          Every chance I get, I water the plants, Lion! Stay focused. Hammock talk come soon. You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo. Bless up. You do know, you do know that they don’t want you to have lunch. I’m keeping it real with you, so what you going do is have lunch. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. They don’t want us to win.
        </p>
        <p>
          In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Find peace, life is like a water fall, you’ve gotta flow. Another one. They never said winning was easy. Some people can’t handle success, I can. Cloth talk. We the best. We the best. Life is what you make it, so let’s make it. Mogul talk.
        </p>
        <p>
          Lion! A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm. Another one. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! The key to success is to keep your head above the water, never give up.
        </p>
      </Content>
    </Header>
  </div>
)

export default () => <Route path='/about' component={About} />
