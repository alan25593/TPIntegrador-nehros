import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg my-6">
        <Link href={'/'}>
          <ArrowLeftCircle className="text-primario" />
        </Link>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="pb-4 space-y-2 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-center text-primario">
              Términos y Condiciones
            </h1>
            <p className="text-gray-500 text-center dark:text-[#FFF]">
              Actualizado: Diciembre 17, 2024.
            </p>
          </div>
          <div className="mt-6 prose max-w-none dark:text-[#FFF]">
            <p>
              Estos términos y condiciones describen las reglas y regulaciones
              para el uso del sitio web de&nbsp;
              <span className="text-primario font-semibold">Nehros</span>,
              ubicado en https://nehros.com/.
            </p>
            <p className="mt-3 dark:text-[#FFF]">
              Al acceder a este sitio web, asumimos que acepta estos términos y
              condiciones. No continúe usando&nbsp;
              <span className="text-primario font-semibold">Nehros</span> si no
              está de acuerdo con que acepta todos los términos y condiciones
              establecidos en esta página.
            </p>
            <p className="mt-3 dark:text-[#FFF]">
              La siguiente terminología se aplica a estos Términos y
              condiciones, Declaración de privacidad, aviso de exención de
              responsabilidad y todos los acuerdos: &quot;Cliente&quot;, &quot;Usted&quot; y &quot;Su&quot; se
              refieren a usted, la persona que inició sesión en este sitio web y
              cumple con los términos y condiciones de la Compañía. condiciones.
              &quot;La Empresa&quot;, &quot;Nosotros&quot;, &quot;Nuestro&quot; y &quot;Nosotros&quot;, se
              refiere a nuestra Empresa.
            </p>
            <h2 className="mt-3 font-semibold text-primario">Licencia</h2>
            <p className="mt-2 dark:text-[#FFF]">
              A menos que se indique lo contrario,
              <span className="text-primario font-semibold"> Nehros</span> y/o
              sus licenciantes poseen los derechos de propiedad intelectual de
              todo el material de
              <span className="text-primario font-semibold"> Nehros</span>. Todos
              los derechos de propiedad intelectual están reservados.
            </p>
            <h2 className="mt-3 font-semibold text-primario">No debes:</h2>
            <ul>
              <li>
                Volver a publicar material de&nbsp;
                <span className="text-primario font-semibold">Nehros</span>
              </li>
              <li>
                Vender, alquilar o sublicenciar material de&nbsp;
                <span className="text-primario font-semibold">Nehros</span>
              </li>
              <li>
                Reproducir, duplicar o copiar material de&nbsp;
                <span className="text-primario font-semibold">Nehros</span>
              </li>
              <li>
                Redistribuir contenido de&nbsp;
                <span className="text-primario font-semibold">Nehros</span>
              </li>
            </ul>
            <h2 className="mt-3 text-primario font-semibold">
              Reserva de Derechos
            </h2>
            <p className="mt-3 dark:text-[#FFF]">
              Nos reservamos el derecho de solicitar que elimine todos los
              enlaces o cualquier enlace particular a nuestro sitio web.
            </p>
            <h2 className="mt-3 font-semibold text-primario">
              Descargo de responsabilidad
            </h2>
            <p className="mt-3 dark:text-[#FFF]">
              En la medida máxima permitida por la ley aplicable, excluimos
              todas las representaciones, garantías y condiciones relacionadas con
              nuestro sitio web y el uso de este sitio web.
            </p>
          </div>
          <div className="mt-8 space-y-6 max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-primario">FAQs</h2>
            <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
              <summary className="font-medium dark:text-[#FFF]">
                ¿Para qué son los términos y condiciones?
              </summary>
              <p className="mt-2 dark:text-[#FFF]">
                Los términos y condiciones son para el uso del sitio web de
                <span className="text-primario font-semibold"> Nehros</span>,
                ubicado en https://nehros.com/
              </p>
            </details>
            <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
              <summary className="font-medium dark:text-[#FFF]">
                ¿Puedo vincularme al sitio web de&nbsp;
                <span className="text-primario font-semibold">Nehros</span>?
              </summary>
              <p className="mt-2 dark:text-[#FFF]">
                Las siguientes organizaciones pueden vincularse a nuestro sitio
                web sin aprobación previa por escrito: 1. Agencias
                gubernamentales; 2. Organizaciones de noticias; 3. Directorio en
                línea de distribuidores.
              </p>
            </details>
            <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
              <summary className="font-medium dark:text-[#FFF]">
                ¿Cómo me comunico con&nbsp;
                <span className="text-primario font-semibold ">Nehros</span>&nbsp;
                sobre los términos y condiciones?
              </summary>
              <p className="mt-2 dark:text-[#FFF]">
                Si encuentra algún enlace en nuestro sitio web que sea ofensivo
                por cualquier motivo, usted es libre de contactarnos e
                informarnos.
              </p>
            </details>
            <div className="mt-8 space-y-6 max-w-3xl mx-auto">
              <Link href="/" className="text-base font-bold text-primario">
                Volver atrás
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
