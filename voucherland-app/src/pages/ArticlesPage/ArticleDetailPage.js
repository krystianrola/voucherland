import React, { useEffect, useState } from "react";
import Article from "../../components/Articles/Article";
import Header from "../../components/Header/Header";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ROUTE_ARTICLES } from "../../routes";

export default function ArticleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);

    axios.get("/data.json").then((response) => {
      setDetails(
        response.data.articles.find((article) => article.id === Number(id))
      );
    });

    setLoading(true);
  }, [id]);

  return (
    <section className="article_details">
      <Header />

      {loading && (
        <article className="article_details_content">
          <h2>{details.title}</h2>
          <div className="article_banner">
            <img src="/resources/images/article-pic.png" alt="article-pic" />
          </div>

          <div className="article_text_content">
            <p className="article_main_text">{details.content}</p>
            <p className="article_main_text">{details.content}</p>

            <h3 className="article_intertitle">{details.sub_title}</h3>

            <p className="article_additional_text">{details.sub_content}</p>
            <p className="article_additional_text">{details.sub_content}</p>
          </div>

          <button className="back_btn" onClick={() => navigate(ROUTE_ARTICLES)}>
            <FiArrowLeft className="back_btn_arrow" /> Go back
          </button>
        </article>
      )}

      <article className="related_articles">
        <h2>Related articles</h2>
        <div className="related_articles_content">
          <Article
            article_tag={"Collaboration"}
            article_title={"New collaboration with the cola group"}
            article_image={"./resources/images/bottle-capsule.png"}
            article_read_time={"7 min"}
          />
          <Article
            article_tag={"Collaboration"}
            article_title={"New collaboration with the cola group"}
            article_image={"./resources/images/bottle-capsule.png"}
            article_read_time={"7 min"}
          />
          <Article
            article_tag={"Collaboration"}
            article_title={"New collaboration with the cola group"}
            article_image={"./resources/images/bottle-capsule.png"}
            article_read_time={"7 min"}
          />
          <Article
            article_tag={"Collaboration"}
            article_title={"New collaboration with the cola group"}
            article_image={"./resources/images/bottle-capsule.png"}
            article_read_time={"7 min"}
          />
        </div>
      </article>
    </section>
  );
}