import React from 'react';
import { Message } from "components";



import "./Home.scss";



const Home = () => (
          <section className="home">
        {/* <Message  avatar = "https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-1/cp0/p74x74/84724539_502715653954100_6357340454723256320_o.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=3CY1Rudp6MIAX8kjK2X&_nc_ht=scontent-yyz1-1.xx&oh=9d4cea8bf26ab51e3ee37e96fbe97764&oe=5E8FAC0B"   */}
        <Message  avatar = "https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-1/cp0/p74x74/88261627_102345248043884_7543978457626050560_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=Sgr5VVhXqYwAX9RMQEf&_nc_ht=scontent-yyz1-1.xx&oh=cdcb8d3df20cc29b01e3d3acb22cf2f8&oe=5E932B2E"  
        text = "Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"  
        date = "Sat Mar 14 2020 12:12:05"
        attachments = {[
          ,{
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
          }
          ,{
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2&nature,water',
          }
          ,{
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=3&nature,water',
          }
        ]}
        />
           <Message  
           avatar = "https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-1/cp0/p74x74/84724539_502715653954100_6357340454723256320_o.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=3CY1Rudp6MIAX8kjK2X&_nc_ht=scontent-yyz1-1.xx&oh=9d4cea8bf26ab51e3ee37e96fbe97764&oe=5E8FAC0B"  
           text = "Hello!" 
        date = "Sat Mar 14 2020 3:12:05"
        isMe = {true}
        isReaded = {false}

        />
              </section>
            );
export default Home;