import { Player, Youtube, Vimeo, DefaultUi } from '@vime/react';
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from 'phosphor-react';

import '@vime/core/themes/default.css';
import { useGetLessongBySlugQuery } from '../graphql/generated';
import { TailSpin } from 'react-loader-spinner';

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessongBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <TailSpin color='#00875F' height={64} width={64} />
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-16 ">
          <div className="flex-1">
            <h1 className=" text-lg lg:text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2  border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                />
                <div className="leading-relaxed">
                  <strong className="font-bold text-lg lg:text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm lock">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-auto ">
            <a
              href="#"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a
              href="#"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-700 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="gap-8 mt-16 lg:mt-20 flex flex-col lg:grid lg:grid-cols-2">
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex  lg:items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-auto lg:h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="lg:text-2xl text-lg ">
                Material complementar
              </strong>
              <p className=" text-[.75rem] lg:text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-auto lg:h-full p-6 flex items-center">
              <CaretRight color="#81D8F7" size={24} />
            </div>
          </a>
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-auto lg:h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="lg:text-2xl text-lg ">
                Wallpapers exclusivos
              </strong>
              <p className="text-[.75rem] lg:text-sm  text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="h-auto lg:h-full p-6 flex items-center">
              <CaretRight color="#81D8F7" size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
