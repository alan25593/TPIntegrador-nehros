import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 ">
      <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <Link href={'/'}>
          <ArrowLeftCircle className="text-primario" />
        </Link>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="pb-4 space-y-2 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-center text-primario dark:text-[#e0aaff]">
              Política de Privacidad
            </h1>
            <p className="text-gray-500 dark:text-white text-center">
              Actualizado: Septiembre 19, 2024.
            </p>
          </div>
          <div className="mt-6 prose max-w-none">
            <p className="mt-2 dark:text-[#FFF]">
              1.&nbsp;
              <span className="text-primario font-semibold">
                Recopilación de Información
              </span>
              : La información recopilada será usada para proporcionar, mantener y mejorar nuestros servicios, procesar transacciones, enviar notificaciones y para comunicarnos con usted.
            </p>
            <p className="mt-3 dark:text-[#FFF]">
              2.&nbsp;
              <span className="text-primario font-semibold">
                Uso de la información
              </span>
              : La información recopilada para proporcionar, mantener y mejorar
              nuestros servicios, procesar transacciones, enviar notificaciones
              y para comunicarnos con usted.
            </p>
            <p className="mt-3 dark:text-[#FFF]">
              3.&nbsp;
              <span className="text-primario font-semibold">
                Protección de Datos
              </span>
              : Implementamos medidas de seguridad diseñadas para proteger sus
              datos personales contra acceso no autorizado y uso indebido.
            </p>
            <p className="mt-3 dark:text-[#FFF]">
              4.&nbsp;
              <span className="text-primario font-semibold">
                Compartir Información
              </span>
              : No vendemos ni compartimos su información personal con terceros,
              excepto según lo requerido por ley o con su consentimiento
              explícito.
            </p>
            <p className="mt-3 dark:text-[#FFF]">
              5.&nbsp;
              <span className="text-primario font-semibold">
                Sus Derechos
              </span>
              : Usted tiene derecho a acceder, corregir o eliminar su información
              personal. Para ejercer estos derechos, contáctenos a través de la
              información proporcionada al final de esta política.
            </p>
            <p className="mt-3 dark:text-[#FFF]">
              6.&nbsp;
              <span className="text-primario font-semibold">
                Cambios a esta Política
              </span>
              : Nos reservamos el derecho de modificar esta política de privacidad
              en cualquier momento. Los cambios entrarán en vigor inmediatamente
              después de su publicación en nuestro sitio web.
            </p>
            <p className="mt-3 dark:text-[#FFF]">
              7. <span className="text-primario font-semibold">Contacto</span>
              : Si tiene preguntas sobre esta política de privacidad, por favor
              contáctenos en: soporte.nehros@gmail.com.
            </p>
            <div className="mt-8 space-y-6 max-w-3xl mx-auto">
              <Link href="/">
                <span className="text-base font-bold text-primario dark:text-[#e0aaff]">Volver atrás</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
