import React from 'react';
import { useFindContentDetailQuery } from '../../generated/graphql';
import ContentDetail from '../content_detail';

interface IProps {
  id: string,
  title: string
}

export default function Content({id, title}: IProps) {
  const { data } = useFindContentDetailQuery({variables: {id: id}});
  const contentDetails = data?.content?.content_details;
  return (
    <div>
      <h2>{title}</h2>
      {contentDetails && contentDetails.map((value, index) => {
        return (
          <ContentDetail
            header={value?.Header || 'NO TITLE'}
            text={value?.Text || 'NO TEXT'}
            key={`content_detail_list_${index}`}
          />
        )
      })}
    </div>
  );
}