import { ArticlesContainer, CardContainer, CardsContainer } from './styles';
import flexbox from '../../assets/Articles/flexbox-article.png';
import sqlzoo from '../../assets/Articles/sqlzoo-article.png';

export function PublishedArticles() {
  return (
    <ArticlesContainer>
      <h1 id="articles">Published Articles</h1>

      <h4>
        These are articles I've had published at Hackernoon. I've had nearly 9k
        reads on two articles alone. I can't wait to start putting more of these
        out. Teaching what you learn is one proven hack thorougly covered by the
        science of learning. Yet, I don't think we use it often enough. I try to
        make a point of writing as much as I can in a tutorial-like style, first
        for my own reference, then for others to appreciate it if they will.
      </h4>

      <CardsContainer>
        <CardContainer
          href="https://hackernoon.com/how-to-create-truly-responsive-images-with-flexbox-2z4f3yjj"
          target="_blank"
        >
          <img src={flexbox} alt="" />
          <span>How to create truly responsive images with flexbox</span>
        </CardContainer>

        <CardContainer
          href="https://hackernoon.com/learning-self-join-queries-with-sqlzoo-xc163ue7"
          target="_blank"
        >
          <img src={sqlzoo} alt="" />
          <span>Learning self JOIN queries with SQLZOO</span>
        </CardContainer>
      </CardsContainer>
    </ArticlesContainer>
  );
}
