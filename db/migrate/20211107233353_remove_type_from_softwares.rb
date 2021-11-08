class RemoveTypeFromSoftwares < ActiveRecord::Migration[6.1]
  def change
    remove_column :softwares, :Type 
  end
end
