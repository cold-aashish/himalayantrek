
'use client'

import Image from "next/image";
import Link from "next/link";
import blogsData from "../../data/blogs";
import BlogPagination from "./BlogPagination";


const Blog1 = () => {

  return (
    <>

        <div className="row y-gap-30 pt-30">
            {blogsData.map((item) => (
            <div className="col-lg-4 col-sm-6" key={item.id}>
              <Link
                href={`/blog-details/${item.id}`}
                className="blogCard -type-1 d-block "
              >
                <div className="blogCard__image">
                  <div className="rounded-8">
                    <Image
                      width={400}
                      height={300}
                      className="blog-image-custom"
                      src={item.img}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="blog-meta pt-20">
                  <h4 className="text-dark-1 text-20 fw-600">{item.title}</h4>
                  <div className="text-light-1 text-16 lh-14 mt-5">
                    {item.date}
                  </div>
                </div>
              </Link>
            </div>
            ))}
        </div>
        {/* End .row */}

        <BlogPagination />
    </>
  );
};

export default Blog1;
