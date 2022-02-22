class ShlvesController < ApplicationController
    def index
        shlves = Shlf.all
        render json: shlves
    end
end
