import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  projects:Project[]=[];

  constructor() { }

  getProjects(){
    return this.projects = [
      {
          "title":{
            "en":"Landing Page",
            "es":"Pagina Web"
          },
          "description":{
            "en":"Informative website for clothing store, includes image gallery, contact form, location, and contact via WhatsApp.",
            "es":"Sitio web informativo para tienda de ropa, incluye galería de imágenes, formulario de contacto, ubicación y contacto vía WhatsApp."
          },
          "url_image":"projects/jehonatan/home.PNG",
          "gallery":[
            {
              "description":{
                "en":"Updatable product gallery.",
                "es":"Galería de productos actualizable."
              },
              "url":"projects/jehonatan/products.PNG"
            },
            {
              "description":{
                "en":"Updatable image gallery.",
                "es":"Galería de imágenes actualizable."
              },
              "url":"projects/jehonatan/galery.PNG"
            },
            {
              "description":{
                "en":"Contact form via email and contact via whatsapp.",
                "es":"Formulario de contacto vía email y contacto vía whatsapp."
              },
              "url":"projects/jehonatan/contact.PNG"
            }
          ],
      },
      {
        "title":{
          "en":"Time Record",
          "es":"Registro de tiempo"
        },
        "description":{
          "en":"System for controlling hours of operators in assigned activities, allows generating reports and downloading as xlsx.",
          "es":"Sistema de control de horas para operarios en actividades asignadas, permite generar informes y descargar como xlsx."
        },
        "url_image":"projects/horas/home.PNG",
        "gallery":[
          {
            "description":{
              "en":"A registered user initiates a work order indicating the board and the operation to be performed.",
              "es":"Un usuario registrado, inicia una orden de trabajo indicando el tablero y la operación a realizar."
            },
            "url":"projects/horas/start.PNG"
          },
          {
            "description":{
              "en":"When you finish carrying out the activity, enter the document number and its information appears, indicate the amount if necessary and finish the activity.",
              "es":"Cuando termine de realizar la actividad, ingresa numero de documento y aparece la informacion de la misma, indica la cantidad si es necesario y finaliza la actividad."
            },
            "url":"projects/horas/end.PNG"
          },
          {
            "description":{
              "en":"You can consult the activities carried out by date, it indicates the information about it and the duration time, you can download in XLSX format.",
              "es":"Se pueden consultar las actividad realizadas por fecha, indica la información de la misma y el tiempo de duración, puede descargar en formato XLSX."
            },
            "url":"projects/horas/report.PNG"
          }
        ]
      },
      {
        "title":{
          "en":"sales and inventory system",
          "es":"Sistema de ventas e inventario"
        },
        "description":{
          "en":"Sales and inventory management system, allows you to generate barcodes for products, and allows you to record purchases and income and expense reports.",
          "es":"Sistema de gestión de ventas e inventarios, permite generar códigos de barras para productos, y permite registrar compras y reportes de ingresos y gastos."
        },
        "url_image":"projects/ventas/home.PNG",
        "gallery":[
          {
            "description":{
              "en":"Registration of new clients.",
              "es":"Registro de nuevos clientes."
            },
            "url":"projects/ventas/clients.PNG"
          },
          {
            "description":{
              "en":"Registration of new products.",
              "es":"Registro de nuevos productos."
            },
            "url":"projects/ventas/products.PNG"
          },
          {
            "description":{
              "en":"Generation of new sales.",
              "es":"Generación de nueva venta."
            },
            "url":"projects/ventas/sale.PNG"
          },
          {
            "description":{
              "en":"Generate barcodes for one or more products.",
              "es":"Generar códigos de barra para uno o varios productos."
            },
            "url":"projects/ventas/barcodes.PNG"
          }
        ]
      }
    ]
  }
}
