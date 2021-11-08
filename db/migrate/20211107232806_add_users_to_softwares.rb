class AddUsersToSoftwares < ActiveRecord::Migration[6.1]
  def change
    add_reference :softwares , :user , index: true
    add_foreign_key :softwares, :users
  end
end
