<script setup lang="ts">

</script>

<template>
        <h1>View Applicants</h1>

        <div class="box table-container">
        <table class="table is-fullwidth is-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Equipment</th>
              <th>Category</th>
              <th>Primary Muscles</th>
              <th>Instructions</th>
              <th>
                <button
                  class="button is-primary"
                >
                  Delete Applicant
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            
          </tbody> <!-- Add a v-for loop here -->
          <tfoot>
            <tr>
              <td colspan="7">
              </td>
            </tr>
          </tfoot>
        </table>
    </div>
</template>

<style scoped>

</style>