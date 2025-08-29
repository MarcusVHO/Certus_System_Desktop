import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "flowbite-react";
import { useDropzone } from "react-dropzone";

export default function ProgramAditionation() {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
    maxFiles: 1,
    onDrop: (files) => {
      console.log("Arquivos recebidos:", files);
    },
  });

  return (
    <Sheet>
      {/* Botão que abre o sheet */}
      <SheetTrigger className="absolute bottom-0 right-0 m-10 bg-black p-3 flex px-5 rounded-full text-2xl text-white ">
        +
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Adicionar Programação</SheetTitle>
          <SheetDescription>
            Realize o download da programação no email enviado pela BAT e
            importeo através do campo a seguir.
          </SheetDescription>
        </SheetHeader>
        <div
          {...getRootProps()}
          className=" flex-1 items-center justify-center rounded-md border-dashed border-gray-700 cursor-pointer border-2  text-center flex "
        >
          <input {...getInputProps()} />
          <p className="text-[0.8rem]">
            Araste e solte o arquivo aqui ou clique para selecionar.
          </p>
        </div>

        {acceptedFiles.length > 0 && (
          <div>
            {acceptedFiles.map((file) => (
              <Button className="bg-black text-[0.7rem] w-full">
                INSERIR: {file.path}
              </Button>
            ))}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
