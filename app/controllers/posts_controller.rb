class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy, :add_software]
  before_action :set_user_post, only: [:update, :destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts, include: :softwares
  end

  # GET /posts/1
  def show
    render json: @post, include: :softwares
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    software_params[:softwares].each do |software|
      current_software = Software.find_by_id(software)
      @post.softwares.push(current_software)
    end
    if @post.save
      render json: @post, include: :softwares, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    @post.softwares = []
    software_params[:softwares].each do |software|
      current_software = Software.find_by_id(software)
      @post.softwares.push(current_software)
    end
    if @post.update(post_params)
      render json: @post, include: :softwares
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  def add_software
    @software = Software.find(params[:software_id])
    @post = Post.new(post_params)
    @post.user = @current_user
    if @post.save
      @post.softwares << @software
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

 def set_user_post
    @post = @current_user.posts.find(params[:id])
  end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:name, :proposal, :user_id)
    end
    def software_params
      params.require(:post).permit(:softwares => [])
    end
end


