class BlogsController < ApplicationController
    
    def index
        blogs = Blog.all
        render json: blogs
    end

    def create 
        byebug
        blog = Blog.create(blog_params)
        if blog.valid?
            render json: blog
        else
            render json: blog.errors, status: 422
        end
    end

    def update
        blog = Blog.find(params[:id])
        blog.update(cat_params)
        if blog.valid?
            render json: blog
        else
            render json: blog.errors, status: 422
        end
    end

    def destroy
        blog = Blog.find(params[:id])
        blog.destroy
        blogs = Blog.all
        render json: blogs
    end
    
    private
    def blog_params
        params.require(:blog).permit(:name, :comment)
    end
end
