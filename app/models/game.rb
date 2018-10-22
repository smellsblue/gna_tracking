class Game < ApplicationRecord
  belongs_to :user

  def self.not_done
    where.not(state: "done")
  end
end
