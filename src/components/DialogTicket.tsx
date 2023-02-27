import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Copy, X } from 'phosphor-react';

export default () => {

  const [open, setOpen] = useState(false);
  const [cupom, setCupom] = useState<string>("NOMDOCUPOM");

  const getCupom = () => {

    let copyCupom = document.querySelector("#copyCupom");

    if(copyCupom){

      // copyCupom.innerHTML.sele
      // document.execCommand('copy')

    }
  }

  return(
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="underline font-bold text-lg text-zinc-100">
        Saiba mais
      </Dialog.Trigger>

      <Dialog.Portal className="">
        <Dialog.Overlay className="fixed inset-0 bg-black/30 animate-overlay"/>

        <Dialog.Content className="w-[580px] rounded-md bg-white animate-content
         px-5 py-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-between">
            <strong className="text-2xl font-bold">
              Cupom disponível
            </strong>

            <Dialog.Close className="w-7 h-7 bg-zinc-200 rounded flex items-center justify-center">
              <X size={20} weight="bold"/>
            </Dialog.Close>
          </div>

          <p className="mt-2 text-zinc-400">
            Este cupom você irá aplicar no espaço de cupons na plataforma de vendas.
          </p>

          <div className="w-full h-14 mt-5 flex items-center">
            <div className="flex-1 h-full bg-zinc-200 flex items-center px-5 rounded-tl-md rounded-bl-md">
              <h1 id="copyCupom" className="font-bold">{cupom}</h1>
            </div>

            <button  
              onClick={getCupom}
              className="w-14 h-full flex items-center justify-center bg-green-primary
              text-zinc-100 rounded-tr-md rounded-br-md hover:bg-green-secundary transition-colors"
            >
              <Copy size={25}/>
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}