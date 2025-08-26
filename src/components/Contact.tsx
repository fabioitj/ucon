@@ .. @@
 const contacts = [
-  { icon: Phone, label: 'Primary', value: '+55 (47) 99261-1819' },
-  { icon: Phone, label: 'Secondary', value: '+55 (47) 99668-3800' },
-  { icon: Phone, label: 'Support', value: '+55 (47) 99723-9513' }
+  { icon: Phone, label: 'Principal', value: '+55 (47) 99261-1819' },
+  { icon: Phone, label: 'Secundário', value: '+55 (47) 99668-3800' },
+  { icon: Phone, label: 'Suporte', value: '+55 (47) 99723-9513' }
 ];
 
 export default function Contact() {
@@ .. @@
         <div className="text-center mb-16">
-          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
+          <h2 className="text-4xl font-bold mb-4">Vamos Trabalhar Juntos</h2>
           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
-            Ready to transform your business with innovative technology solutions? 
-            Get in touch with our team today.
+            Pronto para transformar seu negócio com soluções tecnológicas inovadoras? 
+            Entre em contato com nossa equipe hoje mesmo.
           </p>
         </div>
@@ .. @@
           >
-            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
+            <h3 className="text-2xl font-bold mb-8">Entre em Contato</h3>
             <div className="space-y-6">
@@ .. @@
                 </div>
                 <div>
-                  <p className="text-gray-300 text-sm">Email</p>
+                  <p className="text-gray-300 text-sm">E-mail</p>
                   <p className="text-xl font-semibold">contact@ucon.com</p>
                 </div>
               </div>
@@ .. @@
                 </div>
                 <div>
-                  <p className="text-gray-300 text-sm">Location</p>
-                  <p className="text-xl font-semibold">Santa Catarina, Brazil</p>
+                  <p className="text-gray-300 text-sm">Localização</p>
+                  <p className="text-xl font-semibold">Santa Catarina, Brasil</p>
                 </div>
               </div>
             </div>
@@ .. @@
             className="bg-gray-800 rounded-2xl p-8"
           >
-            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
+            <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
             <form className="space-y-6">
               <div>
-                <label className="block text-sm font-medium mb-2">Name</label>
+                <label className="block text-sm font-medium mb-2">Nome</label>
                 <input 
                   type="text" 
                   className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
-                  placeholder="Your name"
+                  placeholder="Seu nome"
                 />
               </div>
               <div>
-                <label className="block text-sm font-medium mb-2">Email</label>
+                <label className="block text-sm font-medium mb-2">E-mail</label>
                 <input 
                   type="email" 
                   className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
-                  placeholder="your@email.com"
+                  placeholder="seu@email.com"
                 />
               </div>
               <div>
-                <label className="block text-sm font-medium mb-2">Company</label>
+                <label className="block text-sm font-medium mb-2">Empresa</label>
                 <input 
                   type="text" 
                   className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
-                  placeholder="Your company"
+                  placeholder="Sua empresa"
                 />
               </div>
               <div>
-                <label className="block text-sm font-medium mb-2">Message</label>
+                <label className="block text-sm font-medium mb-2">Mensagem</label>
                 <textarea 
                   rows={4}
                   className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
-                  placeholder="Tell us about your project..."
+                  placeholder="Conte-nos sobre seu projeto..."
                 ></textarea>
               </div>
               <button 
@@ -
                 className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
               >
                 <MessageCircle className="w-5 h-5 mr-2" />
-                Send Message
+                Enviar Mensagem
               </button>
             </form>