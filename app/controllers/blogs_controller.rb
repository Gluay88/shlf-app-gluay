class BlogsController < ApplicationController
    
    def index
        blogs = Blog.all
        render json: blogs
    end

    def create 
        shlf = Shlf.find(params[:shlf_id])
        blog = shlf.blogs.create(blog_params) 
        if blog.valid?
            render json: blog
        else
            render json: blog.errors, status: 422
        end
    end

    def update
        blog = Blog.find(params[:id])
        blog.update(blog_params)
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
        params.require(:blog).permit(:name, :comment, :user_id, :shlf_id)
    end
end
