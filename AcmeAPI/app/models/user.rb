class User < ApplicationRecord


  def as_json(options = {})
    super(options.merge(:methods => :email, :only => []))
  end
end
