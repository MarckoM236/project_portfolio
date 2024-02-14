import { Injectable } from '@angular/core';
import { User_Info } from '../interfaces/user_info';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user! : User_Info;

  constructor() { }

  getUserInfo(){
    return this.user = {
      "photo" : "../../../../assets/images/fotoCV.jpg",
      "first_name" : "Marco",
      "second_name" : "Antonio",
      "first_lastname" : "Marin",
      "second_lastname" : "Franco",
      "phone" : "(+57) 3167482228",
      "email" : "Marcko236@gmail.com",
      "city" : "Cali",
      "department" : "Valle del Cauca",
      "country" : "Colombia",
      "birthdate" : new Date('1993/07/26'),
      "profession" : {
        "en":"FullStack Developer",
        "es":"Desarrollador FullStack"
      },
      "social_networks" : {
        "facebook": "https://www.facebook.com/marcko.maryn",
        "twitter": "",
        "linkedin" : "https://www.linkedin.com/in/marco-a-marin-f",
        "instagram" : "",
        "gitHub" : "https://github.com/MarckoM236"
      },
      "professional_profile" : {
        "en":`<p class='text-light'>
                Technologist in analysis and development of
                information systems, currently
                finishing systems engineering with experience in the support area,
                providing support on site and in form
                remote, server management
                domain, LAN and WAN networks, systems
                Linux and Windows operating systems.
              </p>
              <p class='text-light'>
                MySql, Oracle, SQL Server databases.
              </p>
              <p class='text-light'>
                Experience in the area of ​​software development using
                languages ​​<strong>PHP</strong>(Laravel, Codeigniter, MVC), <strong>JavaScript</strong>(Ajax, Jquery, Angular), <strong>Java</strong>,
                <strong>C#</strong> and version controller management <strong>GIT - GitHub</strong>.
              </p>
              <p class='text-light'>
                Always willing to learn new things
                technologies, comply with the different
                obligations and labor standards that
                are established, high
                responsibility and teamwork.
              </p>`,
        "es":`<p class='text-light'>
                Tecnólogo en análisis y desarrollo de
                sistemas de información, actualmente finalizando
                Ingeniería de Sistemas  con experiencia en el área de soporte,
                brindando soporte en sitio y en forma
                remota gestion de servidores de
                dominio, redes LAN y WAN, 
                Sistemas operativos Linux y Windows.
              </p>
              <p class='text-light'>
                MySql, Oracle, SQL Server databases.
              </p>
              <p class='text-light'>
                Experiencia en el área de desarrollo de software utilizando
                lenguajes <strong>PHP</strong>(Laravel, Codeigniter, MVC), <strong>JavaScript</strong>(Ajax, Jquery, Angular), <strong>Java</strong>,
                <strong>C#</strong> y controlador de versiones <strong>GIT - GitHub</strong>.
              </p>
              <p class='text-light'>
                Siempre dispuesto a aprender nuevas
                tecnologías, cumplir con las diferentes
                obligaciones y normas laborales que
                están establecidas, alta
                responsabilidad y trabajo en equipo.
              </p>`
      },
      "interests" : {
        "en":`<h5 class="mb-3">Passionate about technology</h5>
              <p class="mt-20">
                I like to experiment with different technological tools, and go beyond programming languages, 
                my curiosity and dedication to continuous learning allow me to enjoy facing challenges and learning new ways to find effective solutions to them.
              </p>`,
        "es":`<h5 class="mb-3">Apasionado por la tecnología</h5>
              <p class="mt-20">
                Me gusta experimentar con diferentes herramientas tecnológicas, e ir más allá de los lenguajes de programación,
                Mi curiosidad y dedicación al aprendizaje continuo me permiten disfrutar enfrentando desafíos y aprendiendo nuevas formas de encontrar soluciones efectivas a los mismos.
              </p>`
      }
    }
  }
}
