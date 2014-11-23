#encoding: utf-8
class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|

      t.timestamps
    end
  end
end
