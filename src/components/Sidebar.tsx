import { isComponentRegistered } from '@vime/core';
import classNames from 'classnames';
import { useGetLessonsQuery } from '../graphql/generated';

import { Lesson } from './Lesson';

interface Props {
  isOpen: Boolean,
  setIsOpen: Function,
}

export function Sidebar(props: Props) {
  const { data } = useGetLessonsQuery();


  return (
    <aside className={classNames('lg:static fixed z-[1000] lg:z-index-auto top-16 left-0 w-full min-h-screen lg:static lg:w-[348px] bg-gray-700 p-6 border-1 border-l border-gray-600 transition-transform',{
      'transform translate-x-[0]': props.isOpen,
      'transform -translate-x-full lg:translate-x-0 ': !props.isOpen
      
    })}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              isOpen={props.isOpen}
              setIsOpen={props.setIsOpen}
            />
          );
        })}
      </div>
    </aside>
  );
}
